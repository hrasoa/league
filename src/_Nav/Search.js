// @flow
import React, { Component } from 'react';
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

type State = {
  value: string,
};

class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { search } = this.props;
    this.state = {
      value: search.q || '',
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { value } = this.state;
    return nextState.value !== value;
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = this.state;
    const q = value.trim();
    if (!q.length) {
      return;
    }
    const { push, location, url } = this.props;
    const match = matchPath(location.pathname, { path: url('search') });
    push(match ? location.pathname : 'search', { search: { q } });
  }

  render() {
    const { value } = this.state;
    return (
      <form action="/search" onSubmit={this.handleSubmit}>
        <span className={styles.root}>
          <input
            aria-labelledby="search-btn"
            name="q"
            id="search-q"
            className={styles.input}
            placeholder="Search..."
            type="search"
            value={value}
            onChange={this.handleChange}
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
  }
}

export default withRouter(Search);
