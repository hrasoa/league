// @flow
import React from 'react';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from './App';
import stats from '../build/react-loadable.json';

const assets: { client: { css: string } } = require(process.env.RAZZLE_ASSETS_MANIFEST);

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
    const chunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
    const styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    const prod = process.env.NODE_ENV === 'production';
    res.status(200).render('index', {
      assets,
      chunks: chunks.map(
        chunk => (prod
          ? `/${chunk.file}`
          : `http://${process.env.HOST || 'localhost'}:${parseInt(process.env.PORT, 10) + 1}/${chunk.file}`
        ),
      ),
      markup,
      prod,
      styles: styles.map(style => `/${style.file}`),
    });
  }
});

export default server;
