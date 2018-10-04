// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import wrapper from 'inuitcss/objects/_objects.wrapper.scss';
import withRouter from '../_Router/withRouter';
import type { UrlFormatter } from '../_Router/type';
import styles from './Categories.scss';

const categories = [
  { label: 'All', path: 'search' },
  { label: 'Players', path: 'search_players' },
  { label: 'Teams', path: 'search_teams' },
];

const Categories = ({ url }: { url: UrlFormatter }) => (
  <div className={styles.root}>
    <div className={wrapper.oWrapper}>
      <ul>
        {categories.map(category => (
          <li key={category.path}>
            <NavLink
              activeClassName={styles.active}
              className={styles.link}
              title={category.label}
              to={url(category.path)}
            >
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default withRouter(Categories);

export { categories };
