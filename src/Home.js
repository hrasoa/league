import React from 'react';
import Loadable from 'react-loadable';
import styles from './Home.scss';

const Logo = Loadable({
  loader: () => import('./Logo'),
  loading: () => null,
});

const Intro = Loadable({
  loader: () => import('./Intro'),
  loading: () => null,
});

const Welcome = Loadable({
  loader: () => import('./Welcome'),
  loading: () => null,
});

const Home = () => (
  <div className={styles.home}>
    <div className={styles.header}>
      <Logo />
      <Welcome />
    </div>
    <Intro />
    <ul className={styles.resources}>
      <li>
        <a href="https://github.com/jaredpalmer/razzle">Docs</a>
      </li>
      <li>
        <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
      </li>
      <li>
        <a href="https://palmer.chat">Community Slack</a>
      </li>
    </ul>
  </div>
);

export default Home;
