// @flow
import React, { Fragment } from 'react';
import Card from '../../Player/Card';
import styles from './All.scss';

const All = () => (
  <Fragment>
    <span className={styles.titles}>Players</span>
    <ul className={styles.list}>
      <li>
        <a href="/">
          <Card />
        </a>
      </li>
      <li>
        <a href="/">
          <Card />
        </a>
      </li>
      <li>
        <a href="/">
          <Card />
        </a>
      </li>
      <li>
        <a href="/">
          <Card />
        </a>
      </li>
      <li>
        <a href="/">
          <Card />
        </a>
      </li>
    </ul>
    <span className={styles.titles}>Teams</span>
  </Fragment>
);

export default All;
