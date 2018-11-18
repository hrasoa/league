// @flow
import React from 'react';
import type { Node } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import baseStyles from './Select.scss';

type Props = {
  children: Array<Node>,
  className: ?string,
  styles: { [string]: string },
};

const Select = ({
  children,
  className,
  styles,
  ...rest
}: Props) => {
  const s = { ...baseStyles, ...styles };
  return (
    <span className={s.root}>
      <select
        className={s.select}
        {...rest}
      >
        {children}
      </select>
      <IoMdArrowDropdown className={s.icon} />
    </span>
  );
};

Select.defaultProps = {
  className: null,
  styles: {},
};

export default Select;
