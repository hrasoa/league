// @flow
/* eslint-disable no-console */
import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './_generic.lora.css';
import './_generic.roboto.css';
import InlineProvider from './_Svg/_Inline';
import Inline from './_Svg/_Inline/Inline';
import App from './App';

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
    <BrowserRouter>
      <InlineProvider inlinedIds={svgInlinedIds}>
        <Root />
        <Inline />
      </InlineProvider>
    </BrowserRouter>,
    root,
  );
}
