// @flow
import React from 'react';
import type { Node } from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import styles from './Content.scss';
import classname from '../classname';

type Props = {
  lift: boolean,
  children: Node
}

const Content = ({ lift, children }: Props) => (
  <div className={classname(styles.root, lift ? styles.lift : '', oWrapper)}>
    {children}
  </div>
);

Content.defaultProps = {
  lift: false,
};

export default Content;
