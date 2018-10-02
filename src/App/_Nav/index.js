import React from 'react';
import { NavLink } from 'react-router-dom';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import listInline from 'inuitcss/objects/_objects.list-inline.scss';
import classname from '../../classname';
import Logo from './Logo';
import User from './User';
import links from './links';
import Search from './Search';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <div className={styles.wrapper}>
        <Logo />
        <ul className={styles.list}>
          {links.map(link => (
            <li
              key={link.to}
              className={classname(listInline.oListInlineItem, spacings.uMarginRight)}
            >
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
        <ul className={classname(styles.list, styles.right)}>
          <li className={listInline.oListInlineItem}>
            <Search />
          </li>
          <li className={listInline.oListInlineItem}>
            <User />
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
