// @flow
import React from 'react';
import type { Node } from 'react';
import styles from './Header.scss';

const Header = ({ children }: { children: Node }) => (
  <header className={styles.root}>
    {children}
  </header>
);

export default Header;
