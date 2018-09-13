import React from 'react';
import styles from './Logo.scss';
import logo from './nav_logoman.svg';

const Logo = () => <img src={logo} className={styles.logo} alt="logo" />;

export default Logo;
