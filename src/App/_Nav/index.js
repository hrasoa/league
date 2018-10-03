// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import listInline from 'inuitcss/objects/_objects.list-inline.scss';
import withRouter from '../../_Router/withRouter';
import type { UrlFormatter } from '../../_Router/type';
import classname from '../../classname';
import Logo from './Logo';
import User from './User';
import links from './links';
import Search from './Search';
import styles from './Nav.scss';

const Nav = ({ url }: { url: UrlFormatter }) => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <div className={styles.wrapper}>
        <Logo url={url('home')} />
        <ul className={styles.list}>
          {links.map(link => (
            <li
              key={link.name}
              className={classname(listInline.oListInlineItem, spacings.uMarginRight)}
            >
              <NavLink
                activeClassName={styles.active}
                className={styles.link}
                title={link.label}
                to={url(link.name)}
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

export default withRouter(Nav);
