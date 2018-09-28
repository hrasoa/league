// @flow
import React from 'react';
import type { Node } from 'react';
import { oListBare, oListBareItem } from 'inuitcss/objects/_objects.list-bare.scss';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uPaddingTop } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import styles from './Listing.scss';

type Props = {
  children: (any) => Node,
  items: Array<any>
}

const Listing = ({ children, items }: Props) => (
  <div className={classname(styles.root, uPaddingTop)}>
    <div className={oWrapper}>
      <ul className={classname(styles.list, oListBare)}>
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