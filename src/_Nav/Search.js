// @flow
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { matchPath } from 'react-router';
import type { Location } from 'react-router-dom';
import type { UrlPush, UrlFormatter, UrlSearch } from '../_Router/type';
import withRouter from '../_Router/withRouter';
import styles from './Search.scss';

type Props = {
  location: Location,
  push: UrlPush,
  url: UrlFormatter,
  search: UrlSearch,
};

const Search = (props: Props) => {
  const { location, push, search, url } = props;
  const [value, setValue] = useState(search.q || '');

  function handleChange(event) {
    setValue(event.currentTarget.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const q = value.trim();
    if (!q.length) {
      return;
    }
    const match = matchPath(location.pathname, { path: url('search') });
    push(match ? location.pathname : 'search', { search: { q } });
  }

  return (
    <form action="/search" onSubmit={handleSubmit}>
      <span className={styles.root}>
        <input
          aria-labelledby="search-btn"
          name="q"
          id="search-q"
          className={styles.input}
          placeholder="Search..."
          type="search"
          value={value}
          onChange={handleChange}
        />
        <button
          id="search-btn"
          aria-label="Search"
          className={styles.button}
          type="submit"
        >
          <IoMdSearch aria-hidden="true" className={styles.icon} />
        </button>
      </span>
    </form>
  );
};

export default withRouter(Search);
