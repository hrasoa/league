// @flow
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import main from './Main.scss'; // eslint-disable-line import/order
import header from './Header.scss'; // eslint-disable-line import/order
import './App.scss';
import page from '../_elements.page.scss';
import withRouter from '../_Router/withRouter';
import type { UrlFormatter } from '../_Router/type';
import Banner from '../_Ads';
import Home from '../Home';
import Search from '../Search';
import Nav from '../_Nav';

const App = ({ url }: { url: UrlFormatter }) => (
  <Fragment>
    <Helmet>
      {typeof document === 'undefined' && <html lang="en" className={page.html} />}
    </Helmet>
    <div className={header.root}>
      <Nav />
      <Banner />
    </div>
    <div className={main.root}>
      <Switch>
        <Route component={Home} exact path={url('home')} />
        <Route component={Search} exact path={url('search')} />
      </Switch>
    </div>
  </Fragment>
);

export default withRouter(App);
