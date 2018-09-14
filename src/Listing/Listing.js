// @flow
import React from 'react';
import type { Node } from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uPaddingTop } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import styles from './Listing.scss';

type Props = {
  children: Node
}

const Listing = ({ children }: Props) => (
  <div className={classname(styles.root, uPaddingTop)}>
    <div className={oWrapper}>
      {children}
    </div>
  </div>
);

export default Listing;
