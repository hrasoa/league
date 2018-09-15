// @flow
import React from 'react';
import logo from './nav_logoman.svg';

type Props = {
  className?: ?string
}

const Logo = ({ className }: Props) => <img src={logo} className={className} alt="logo" />;

Logo.defaultProps = {
  className: null,
};

export default Logo;
