// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import listInline from 'inuitcss/objects/_objects.list-inline.scss';
import classname from 'classnames';
import withRouter from '../_Router/withRouter';
import type { UrlFormatter, UrlSearch } from '../_Router/type';
import Wrapper from '../_Wrapper';
import styles from './Categories.scss';

const categories = [
  { label: 'All', pathName: 'search' },
  { label: 'Players', pathName: 'search_players' },
  { label: 'Teams', pathName: 'search_teams' },
];

const Categories = ({ url, search }: { url: UrlFormatter, search: UrlSearch }) => {
  const { q } = search;
  return (
    <div className={styles.root}>
      <Wrapper className={spacings.uPaddingVerticalLarge}>
        <div className={styles.title}>
          Search results for {q}
        </div>
        <ul className={classname(listInline.oListInline, spacings.uMarginBottomNone)}>
          {categories.map(category => (
            <li
              key={category.pathName}
              className={classname(listInline.oListInlineItem, spacings.uMarginRight)}
            >
              <NavLink
                activeClassName={styles.active}
                className={styles.link}
                isActive={(match, location) => location.pathname === url(category.pathName)}
                title={category.label}
                to={url(category.pathName, q ? { search: { q } } : null)}
              >
                {category.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Wrapper>
    </div>
  );
};

export default withRouter(Categories);

export { categories };
