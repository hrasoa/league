import React, { Fragment } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import styles from './Main.scss';
import './App.scss';
import Banner from '../_Ads';
import Header from './_Header';
import Nav from './_Nav';
import Home from '../Home';
import Players from '../Players';
import Teams from '../Teams';

const App = () => (
  <Fragment>
    <Header>
      <Nav />
      <Banner />
    </Header>
    <div className={styles.main}>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Players} exact path="/players" />
        <Route component={Teams} exact path="/teams" />
      </Switch>
    </div>
  </Fragment>
);

export default App;
