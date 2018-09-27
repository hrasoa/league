// @flow
import React from 'react';
import type { Node } from 'react';
import { root } from './Header.scss';

const Header = ({ children }: { children: Node }) => (
  <header className={root}>
    {children}
  </header>
);

export default Header;
