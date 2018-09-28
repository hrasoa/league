// @flow
import fs from 'fs';
import path from 'path';
import React from 'react';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import paths from 'razzle/config/paths';
import stats from '../build/react-loadable.json'; // eslint-disable-line import/no-unresolved
import App from './App';
import lora from './_Fonts/lora-v12-latin-regular.woff2';
import openSans from './_Fonts/open-sans-v15-latin-regular.woff2';

const assets: { client: { css: string, js: string } } = require(process.env.RAZZLE_ASSETS_MANIFEST);
const prod = process.env.NODE_ENV === 'production';

const critical = prod
  ? fs.readFileSync(path.join(paths.appBuildPublic, assets.client.css), { encoding: 'utf8' })
  : null;
const fonts = prod
  ? [lora, openSans]
  : null;
const loadCss = fs.readFileSync(path.join(paths.appNodeModules, 'fg-loadcss/dist/loadCss.min.js'), { encoding: 'utf8' });

const server = express();
server.use(express.static(process.env.RAZZLE_PUBLIC_DIR || ''));
server.disable('x-powered-by');
server.set('view engine', 'pug');
server.set('views', './src');
server.get('/*', (req: express$Request, res: express$Response) => {
  const context: { url?: string } = {};
  const modules: Array<string> = [];
  const markup = renderToString(
    <Capture report={(moduleName) => { modules.push(moduleName); }}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Capture>,
  );
  if (context.url) {
    res.redirect(context.url);
  } else {
    const bundles: Array<{ file: string }> = getBundles(stats, modules);
    const chunks = bundles.filter(bundle => bundle && bundle.file.endsWith('.js'));
    const styles = bundles.filter(bundle => bundle && bundle.file.endsWith('.css'));
    res.status(200).render('index', {
      assets,
      chunks: [...new Set(
        chunks.map(
          chunk => (prod
            ? `/${chunk.file}`
            : `http://${process.env.HOST || 'localhost'}:${parseInt(process.env.PORT, 10) + 1}/${chunk.file}`
          ),
        ).filter(chunk => assets.client && chunk !== assets.client.js),
      )],
      critical,
      fonts,
      loadCss,
      markup,
      prod,
      styles: [...new Set(styles.map(style => `/${style.file}`))],
    });
  }
});

export default server;
