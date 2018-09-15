import React from 'react';
import { Link } from 'react-router-dom';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { oListInline } from 'inuitcss/objects/_objects.list-inline.scss';
import { uPaddingVerticalSmall, uMarginRight } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Logo from '../Logo';
import User from './User';
import links from './links';
import {
  root,
  fixed,
  wrapper,
  list,
  logo,
} from './Nav.scss';

const Nav = () => (
  <nav className={root}>
    <div className={fixed}>
      <div className={classname(wrapper, oWrapper, uPaddingVerticalSmall)}>
        <ul className={classname(list, oListInline)}>
          <li className={uMarginRight}>
            <Link to="/" title="Home">
              <Logo className={logo} />
            </Link>
          </li>
          {links.map(link => (
            <li key={link.to} className={uMarginRight}>
              <Link to={link.to} title={link.label}>
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
