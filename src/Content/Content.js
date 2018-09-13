// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './Content.scss';
import shared from '../CoverContent.scss';

const Content = ({ children }: { children: Node }) => (
  <div className={`${styles.content} ${shared.content}`}>
    {children}
  </div>
);

export default Content;
