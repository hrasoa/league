// @flow
import React from 'react';
import { hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import './_generic.lora.scss';
import './_generic.open-sans.scss';
import App from './App';

const root = document.getElementById('root');

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
      <Root />
    </BrowserRouter>,
    root,
  );
}
