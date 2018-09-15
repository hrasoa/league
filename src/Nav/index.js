import React from 'react';
import { Link } from 'react-router-dom';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { oListInline } from 'inuitcss/objects/_objects.list-inline.scss';
import { uPaddingVerticalSmall, uMarginRight } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Logo from '../Logo';
import User from './User';
import links from './links';
import styles from './Nav.scss';

const Nav = () => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <div className={classname(styles.wrapper, oWrapper, uPaddingVerticalSmall)}>
        <ul className={classname(styles.list, oListInline)}>
          <li className={uMarginRight}>
            <Link title="Home" to="/">
              <Logo className={styles.logo} />
            </Link>
          </li>
          {links.map(link => (
            <li key={link.to} className={uMarginRight}>
              <Link title={link.label} to={link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <User />
      </div>
    </div>
  </nav>
);

export default Nav;
