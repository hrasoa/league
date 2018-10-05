// @flow
import React from 'react';
import type { Node } from 'react';
import classname from '../classname';
import styles from './Content.scss';

type Props = {
  lift: boolean,
  children: Node,
}

const Content = ({ lift, children }: Props) => (
  <div className={classname(styles.root, lift ? styles.lift : '')}>
    {children}
  </div>
);

Content.defaultProps = {
  lift: false,
};

export default Content;
