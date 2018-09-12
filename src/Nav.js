// @flow
import React from 'react';
import Logo from './Logo';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.fix}>
      <div className={styles.inner}>
        <ul className={styles.main}>
          <li>
            <Logo />
          </li>
          <li>Players</li>
          <li>Teams</li>
          <li>Leagues</li>
          <li>Mercato</li>
        </ul>
        <ul className={styles.user}>
          <li>
            <svg className={styles.userIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
