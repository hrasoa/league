// @flow
import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import styles from './Search.scss';

const Search = () => (
  <form action="/search/all">
    <span className={styles.root}>
      <input className={styles.input} placeholder="Search..." type="search" />
      <button className={styles.button} type="submit">
        <IoMdSearch className={styles.icon} />
      </button>
    </span>
  </form>
);

export default Search;
