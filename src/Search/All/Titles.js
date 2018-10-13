// @flow
import React from 'react';
import type { Node } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import styles from './Titles.scss';

const Titles = ({ children, url }: { children: Node, url: string }) => (
  <div className={styles.root}>
    <span className={styles.title}>{children}</span>
    <a className={styles.more} href={url}>
      See more
      <IoIosArrowRoundForward className={styles.moreIcon} />
    </a>
  </div>
);

export default Titles;
