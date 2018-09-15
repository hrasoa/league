import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import './App.scss';
import Home from '../Home';
import Header from '../Header';
import Players from '../Players';
import Teams from '../Teams';
import Nav from '../Nav';
import Banner from '../Ads';

const App = () => (
  <Fragment>
    <Header>
      <Nav />
      <Banner />
    </Header>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Players} exact path="/players" />
      <Route component={Teams} exact path="/teams" />
    </Switch>
  </Fragment>
);

export default App;
