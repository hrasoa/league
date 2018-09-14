import React from 'react';
import { root } from './Logo.scss';
import logo from './nav_logoman.svg';

const Logo = () => <img src={logo} className={root} alt="logo" />;

export default Logo;
