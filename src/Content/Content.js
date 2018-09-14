// @flow
import React from 'react';
import type { Node } from 'react';
import { root } from './Content.scss';
import { content } from '../CoverContent.scss';

const Content = ({ children }: { children: Node }) => (
  <div className={`${root} ${content}`}>
    {children}
  </div>
);

export default Content;
