// @flow
import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './_generic.lora.css';
import './_generic.open-sans.css';
import Inline from './_Svg/_Inline';
import Inliner from './_Svg/_Inline/Inliner';
import App from './App';

const root = document.getElementById('root');

const { svgInlinedIds } = window.INITIAL_STATE;

window.main = () => {
  render(App);
};

if (module.hot) {
  module.hot.accept('./App', () => {
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
      <Inline inlinedIds={svgInlinedIds}>
        <Root />
        <Inliner />
      </Inline>
    </BrowserRouter>,
    root,
  );
}
