// @flow
import React from 'react';
import type { Node } from 'react';
import wrapper from 'inuitcss/objects/_objects.wrapper.scss';
import classnames from 'classnames';

type Props = {
  children: Node,
  className: ?string,
};

const Wrapper = ({ children, className, ...rest }: Props) => (
  <div className={classnames(wrapper.oWrapper, className)} {...rest}>
    {children}
  </div>
);

Wrapper.defaultProps = {
  className: null,
};

export default Wrapper;
