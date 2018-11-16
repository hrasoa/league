import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';
import { HelmetProvider } from 'react-helmet-async';
import App from '.';

describe('<App />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </MemoryRouter>,
      div,
    );
  });
});
