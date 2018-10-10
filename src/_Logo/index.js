// @flow
// Stand-alone logo, do not add other components
import React from 'react';
import logo from './nav_logoman.svg';

type Props = {
  className: ?string,
};

const Logo = ({ className }: Props) => (
  <img
    alt="logo"
    className={className}
    src={logo}
  />
);

Logo.defaultProps = {
  className: null,
};

export default Logo;
