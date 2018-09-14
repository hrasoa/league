import React from 'react';
import { Link } from 'react-router-dom';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { oListInline } from 'inuitcss/objects/_objects.list-inline.scss';
import { uPaddingVerticalSmall, uMarginRight } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Logo from '../Logo';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <div className={classname(styles.wrapper, oWrapper, uPaddingVerticalSmall)}>
        <ul className={classname(styles.list, oListInline)}>
          <li className={uMarginRight}>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li className={uMarginRight}>
            <Link to="/players">
              Players
            </Link>
          </li>
          <li className={uMarginRight}>
            <Link to="/teams">
              Teams
            </Link>
          </li>
          <li className={uMarginRight}>Leagues</li>
          <li className={uMarginRight}>Mercato</li>
        </ul>
        <ul className={classname(styles.user, oListInline)}>
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
