import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import './App.scss';
import Banner from '../_Ads';
import Header from './_Header';
import Nav from './_Nav';
import Home from '../Home';
import Players from '../Players';
import Teams from '../Teams';
import Inline from '../_Svg/_Inline';

const App = () => (
  <Fragment>
    <Header>
      <Nav />
      <Banner />
    </Header>
    <Inline>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Players} exact path="/players" />
        <Route component={Teams} exact path="/teams" />
      </Switch>
    </Inline>
  </Fragment>
);

export default App;
