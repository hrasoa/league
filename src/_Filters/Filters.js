// @flow
import React from 'react';
import type { Node } from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import styles from './Filters.scss';

type Props = {
  children: Node
}

const Filters = ({ children }: Props) => (
  <div className={styles.root}>
    <div className={oWrapper}>
      {children}
    </div>
  </div>
);

export default Filters;
