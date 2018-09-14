// @flow
import React from 'react';
import type { Node } from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { root } from './Content.scss';
import { content } from '../CoverContent.scss';
import classname from '../classname';

const Content = ({ children }: { children: Node }) => (
  <div className={classname(root, content, oWrapper)}>
    {children}
  </div>
);

export default Content;
