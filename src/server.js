// @flow
import fs from 'fs';
import path from 'path';
import React from 'react';
import proxy from 'express-http-proxy';
import { renderToString } from 'react-dom/server';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';
import express from 'express';
import type { $Request, $Response } from 'express';
import paths from 'razzle/config/paths';
import stats from '../build/react-loadable.json';
import App from './App';
import InlineProvider, { getSvgs } from './_SvgInline';
import fout from './_utilities.fonts.scss';
import lora from './_Fonts/lora-v12-latin-regular.woff2';
import roboto from './_Fonts/roboto-v18-latin-regular.woff2';

const {
  RAZZLE_PUBLIC_DIR,
  RAZZLE_API_HOST,
  RAZZLE_API_PATH,
  RAZZLE_ASSETS_MANIFEST,
  NODE_ENV,
  HOST,
  PORT,
} = process.env;

const assets: {
  client: { css: string, js: string },
} = require(RAZZLE_ASSETS_MANIFEST);
const prod = NODE_ENV === 'production';

const critical = prod
  ? fs.readFileSync(path.join(paths.appBuildPublic, assets.client.css), {
      encoding: 'utf8',
    })
  : null;

const fontStages = {
  className: fout.fontBody,
  fonts: ['1em Lora', '1em Roboto'],
  name: 'foutStageOne',
  next: {
    fonts: ['700 1em Lora', '700 1em Roboto'],
    name: 'foutStageTwo',
  },
};

const server = express();

server.use(express.static(RAZZLE_PUBLIC_DIR || ''));
server.use(
  '/api',
  proxy(RAZZLE_API_HOST, {
    proxyReqPathResolver: () => RAZZLE_API_PATH,
  })
);
server.disable('x-powered-by');
server.set('view engine', 'pug');
server.set('views', './src');
server.get('/*', async (req: $Request, res: $Response) => {
  const link = ApolloLink.from([
    createHttpLink({
      fetch,
      uri: `${RAZZLE_API_HOST || ''}${RAZZLE_API_PATH || ''}`,
    }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ssrMode: true,
  });

  const helmetContext = {};
  const context: { url?: string } = {};
  const modules: Array<string> = [];
  const svgs = [];

  const Root = (
    <ApolloProvider client={client}>
      <Capture
        report={moduleName => {
          modules.push(moduleName);
        }}
      >
        <StaticRouter context={context} location={req.url}>
          <HelmetProvider context={helmetContext}>
            <InlineProvider
              captureSvgs={svgList => {
                svgs.push(svgList);
              }}
            >
              <App />
            </InlineProvider>
          </HelmetProvider>
        </StaticRouter>
      </Capture>
    </ApolloProvider>
  );
  try {
    await getDataFromTree(Root);
  } catch (e) {
    console.log('catch', e); // eslint-disable-line no-console
  }
  const markup = renderToString(Root);
  if (context.url) {
    res.redirect(context.url);
  } else {
    const apolloState = client.extract();
    const { helmet } = helmetContext;
    const { ids: svgInlinedIds, markup: svgMarkup } = getSvgs(svgs);
    const bundles: Array<{ file: string }> = getBundles(stats, modules);
    const chunks = bundles.filter(
      bundle => bundle && bundle.file.endsWith('.js')
    );
    const styles = bundles.filter(
      bundle => bundle && bundle.file.endsWith('.css')
    );
    const inlineStyles = await getInlineStyles(styles);
    const errors = inlineStyles.filter(
      style => typeof style.href === 'undefined'
    );
    if (errors.length) {
      console.log(`inlineStyles errors: ${errors.join('\n')}`); // eslint-disable-line no-console
    }

    const initialState = { data: apolloState, svgInlinedIds };

    const htmlAttributes = helmet.htmlAttributes
      .toString()
      .match(/(\w+="[\w-_\s]+")/g);
    const htmlAttrs = htmlAttributes
      ? htmlAttributes.reduce((acc, attr) => {
          const [attrName, attrValue] = attr.replace(/"/g, '').split('=');
          return { ...acc, [attrName]: attrValue };
        }, {})
      : {};

    res.status(200).render('index', {
      assets,
      chunks: [
        ...new Set(
          chunks
            .map(chunk =>
              prod
                ? `/${chunk.file}`
                : `http://${HOST || 'localhost'}:${parseInt(PORT, 10) + 1}/${
                    chunk.file
                  }`
            )
            .filter(chunk => assets.client && chunk !== assets.client.js)
        ),
      ],
      critical,
      fontStages,
      fonts: [lora, roboto],
      htmlAttrs,
      initialState,
      markup,
      prod,
      styles: inlineStyles.filter(style => typeof style.href !== 'undefined'),
      svgMarkup,
    });
  }
});

function getInlineStyles(styles) {
  return Promise.all(
    [...new Set(styles.map(style => style.file))].map(readFile)
  );
}

function readFile(file: string) {
  const filePath = path.join(paths.appBuildPublic, file);
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (err: ?Error, data: string) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  })
    .then(data => ({ content: data, href: `/${file}` }))
    .catch(err => err);
}

export default server;
