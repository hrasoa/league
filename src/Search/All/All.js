// @flow
import React, { Fragment } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import Card from '../../_PlayerCards/Basic';
import styles from './All.scss';

const All = () => (
  <Fragment>
    <div className={spacings.uMarginBottom}>
      <span className={styles.titles}>Players</span>
      <a className={styles.more} href="/">
        See more
        <IoIosArrowRoundForward className={styles.moreIcon} />
      </a>
    </div>
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
    <div className={spacings.uMarginBottom}>
      <span className={styles.titles}>Teams</span>
      <a className={styles.more} href="/">
        See more
        <IoIosArrowRoundForward className={styles.moreIcon} />
      </a>
    </div>
  </Fragment>
);

export default All;
