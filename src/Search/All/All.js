// @flow
import React, { Fragment } from 'react';
import Card from '../../Player/Card';
import styles from './All.scss';

const All = () => (
  <Fragment>
    <span className={styles.titles}>Players</span>
    <ul className={styles.list}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
    <span className={styles.titles}>Teams</span>
  </Fragment>
);

export default All;
