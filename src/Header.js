// @flow
import React from 'react';
import type { Node } from 'react';
import './Header.scss';

const Header = ({ children }: { children: Node }) => (
  <header className="header">
    {children}
  </header>
);

export default Header;
