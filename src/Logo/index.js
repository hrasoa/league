import React from 'react';
import { logo } from './Logo.scss';
import svg from './nav_logoman.svg';

const Logo = () => <img src={svg} className={logo} alt="logo" />;

export default Logo;
