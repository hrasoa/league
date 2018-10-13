// @flow
import React, { Fragment } from 'react';
import Card from '../../_PlayerCards/Basic';
import Titles from './Titles';
import styles from './All.scss';

const All = () => (
  <Fragment>
    <Titles url="/">
      Players
    </Titles>
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
    <Titles url="/">
      Teams
    </Titles>
  </Fragment>
);

export default All;
