// @flow
/* eslint-disable no-console */
import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import { HelmetProvider } from 'react-helmet-async';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { ApolloProvider } from 'react-apollo';
import './_generic.lora.css';
import './_generic.roboto.css';
import InlineProvider from './_SvgInline';
import Inline from './_SvgInline/Inline';
import App from './App';
import client from './apiClient';

const root = document.getElementById('root');

const { svgInlinedIds } = window.INITIAL_STATE;

window.main = () => {
  render(App);
};

if (module.hot) {
  console.log('✅  Client-side HMR Enabled!');
  module.hot.accept('./App', () => {
    console.log('🔁  HMR Reloading `./client`...');
    const NewApp = require('./App').default;
    render(NewApp);
  });
}

async function render(Root) {
  if (!root) {
    return;
  }
  await Loadable.preloadReady();
  hydrate(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <HelmetProvider>
          <InlineProvider inlinedIds={svgInlinedIds}>
            <Root />
            <Inline />
          </InlineProvider>
        </HelmetProvider>
      </BrowserRouter>
    </ApolloProvider>,
    root,
  );
}
