// @flow
import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from './Home';
import Header from './Header';
import Nav from './Nav';
import Leaderboard from './LeaderBoard';
import './App.scss';

const App = () => (
  <Fragment>
    <Header>
      <Nav />
      <Leaderboard />
    </Header>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" render={() => <div>Home</div>} />
    </Switch>
  </Fragment>
);

export default App;
