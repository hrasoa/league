// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../../_Logo';
import styles from './Logo.scss';

const Logo = () => (
  <span className={styles.root}>
    <NavLink title="Home" to="/">
      <LogoImage className={styles.logo} />
    </NavLink>
  </span>
);

export default Logo;
