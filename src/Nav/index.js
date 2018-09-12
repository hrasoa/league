import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import './Nav.scss';

const Nav = () => (
  <nav className="nav">
    <div className="nav__fixed">
      <div className="nav__inner">
        <ul className="nav__main">
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/players">
              Players
            </Link>
          </li>
          <li>Teams</li>
          <li>Leagues</li>
          <li>Mercato</li>
        </ul>
        <ul className="nav__user">
          <li>
            <svg className="nav__user-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
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
