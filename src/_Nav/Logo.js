// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../_Logo';
import styles from './Logo.scss';

const Logo = ({ url }: { url: string }) => (
  <span className={styles.root}>
    <NavLink title="Home" to={url}>
      <LogoImage className={styles.logo} />
    </NavLink>
  </span>
);

export default Logo;
