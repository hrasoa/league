// @flow
import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import { IoIosArrowRoundForward } from 'react-icons/io';
import styles from './Titles.scss';

const Titles = ({ children, url }: { children: Node, url: string }) => (
  <div className={spacings.uMarginBottom}>
    <span className={styles.title}>
      {children}
    </span>
    <Link className={styles.more} to={url}>
      See more
      <IoIosArrowRoundForward className={styles.moreIcon} />
    </Link>
  </div>
);

export default Titles;
