// @flow
import React, { Fragment } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Card from '../../_PlayerCards/Basic';
import styles from './All.scss';

const All = () => (
  <Fragment>
    <span className={styles.titles}>Players <IoIosArrowRoundForward /></span>
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
