// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import withRouter from '../../_Router/withRouter';
import type { UrlFormatter } from '../../_Router/type';
import LogoImage from '../../_Logo';
import styles from './Logo.scss';

const Logo = ({ url }: { url: UrlFormatter }) => (
  <span className={styles.root}>
    <NavLink title="Home" to={url('home')}>
      <LogoImage className={styles.logo} />
    </NavLink>
  </span>
);

export default withRouter(Logo);
