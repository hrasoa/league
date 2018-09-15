import React from 'react';
import { Link } from 'react-router-dom';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { oListInline } from 'inuitcss/objects/_objects.list-inline.scss';
import { uPaddingVerticalSmall, uMarginRight } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Logo from '../Logo';
import User from './User';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <div className={classname(styles.wrapper, oWrapper, uPaddingVerticalSmall)}>
        <ul className={classname(styles.list, oListInline)}>
          <li className={uMarginRight}>
            <Link to="/">
              <Logo className={styles.logo} />
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
          <li className={uMarginRight}>
            <Link to="/leagues">
              Leagues
            </Link>
          </li>
          <li className={uMarginRight}>
            <Link to="/mercato">
              Mercato
            </Link>
          </li>
        </ul>
        <User />
      </div>
    </div>
  </nav>
);

export default Nav;
