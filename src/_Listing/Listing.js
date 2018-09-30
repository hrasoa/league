// @flow
import React from 'react';
import type { Node } from 'react';
import listBare from 'inuitcss/objects/_objects.list-bare.scss';
import wrapper from 'inuitcss/objects/_objects.wrapper.scss';
import styles from './Listing.scss';

type Props = {
  children: (any) => Node,
  items: Array<any>,
}

const Listing = ({ children, items }: Props) => (
  <div className={styles.root}>
    <div className={wrapper.oWrapper}>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={listBare.oListBareItem}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Listing;
