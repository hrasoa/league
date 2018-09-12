// @flow
import React from 'react';
import type { Node } from 'react';
import './Content.scss';

const Content = ({ children }: { children: Node }) => (
  <div className="content">
    {children}
  </div>
);

export default Content;
