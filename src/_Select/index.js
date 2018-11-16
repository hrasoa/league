// @flow
import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { IoMdArrowDropdown } from 'react-icons/io';
import elStyles from './Select.scss';

type Props = {
  children: Array<Node>,
  className: ?string,
  styles: ?{ [string]: string },
};

const Select = ({
  children,
  className,
  styles,
  ...rest
}: Props) => (
  <span className={classnames(elStyles.root, className)}>
    <select
      className={classnames(elStyles.select, styles && styles.select)}
      {...rest}
    >
      {children}
    </select>
    <IoMdArrowDropdown className={classnames(elStyles.icon, styles && styles.icon)} />
  </span>
);

Select.defaultProps = {
  className: null,
  styles: null,
};

export default Select;
