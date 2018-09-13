// @flow
import React from 'react';
import type { Node } from 'react';
import { content } from './Content.scss';
import styles from '../Cover/Cover.scss';

const Content = ({ children }: { children: Node }) => (
  <div className={`${content} ${styles.content}`}>
    {children}
  </div>
);

export default Content;
