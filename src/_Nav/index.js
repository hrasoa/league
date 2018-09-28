import React from 'react';
import { NavLink } from 'react-router-dom';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { oListInline } from 'inuitcss/objects/_objects.list-inline.scss';
import { uPaddingVerticalSmall, uMarginRight } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Logo from '../_Logo';
import User from './User';
import links from './links';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <div className={classname(styles.wrapper, oWrapper, uPaddingVerticalSmall)}>
        <ul className={classname(styles.list, oListInline)}>
          <li className={uMarginRight}>
            <NavLink title="Home" to="/">
              <Logo className={styles.logo} />
            </NavLink>
          </li>
          {links.map(link => (
            <li key={link.to} className={uMarginRight}>
              <NavLink
                activeClassName={styles.active}
                className={styles.link}
                title={link.label}
                to={link.to}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <User />
      </div>
    </div>
  </nav>
);

export default Nav;