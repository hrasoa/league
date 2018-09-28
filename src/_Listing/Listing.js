// @flow
import React from 'react';
import type { Node } from 'react';
import { oListBareItem } from 'inuitcss/objects/_objects.list-bare.scss';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import styles from './Listing.scss';

type Props = {
  children: (any) => Node,
  items: Array<any>
}

const Listing = ({ children, items }: Props) => (
  <div className={styles.root}>
    <div className={oWrapper}>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.key} className={oListBareItem}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Listing;
