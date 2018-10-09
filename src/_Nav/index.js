// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import listInline from 'inuitcss/objects/_objects.list-inline.scss';
import classname from 'classnames';
import withRouter from '../_Router/withRouter';
import type { UrlFormatter } from '../_Router/type';
import Wrapper from '../_Wrapper';
import Logo from './Logo';
import User from './User';
import Search from './Search';
import styles from './Nav.scss';

const links = [
  {
    label: 'Leagues',
    pathName: 'leagues',
  },
  {
    label: 'Mercato',
    pathName: 'mercato',
  },
];

const Nav = ({ url }: { url: UrlFormatter }) => (
  <nav className={styles.root}>
    <div className={styles.fixed}>
      <Wrapper className={styles.wrapper}>
        <Logo url={url('home')} />
        <ul className={styles.list}>
          {links.map(link => (
            <li
              key={link.pathName}
              className={classname(listInline.oListInlineItem, spacings.uMarginRight)}
            >
              <NavLink
                activeClassName={styles.active}
                className={styles.link}
                title={link.label}
                to={url(link.pathName)}
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
      </Wrapper>
    </div>
  </nav>
);

export default withRouter(Nav);
