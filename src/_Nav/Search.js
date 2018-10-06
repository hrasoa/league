// @flow
import React, { Component } from 'react';
import { IoMdSearch } from 'react-icons/io';
import type { UrlPush } from '../_Router/type';
import withRouter from '../_Router/withRouter';
import styles from './Search.scss';

type Props = {
  push: UrlPush,
}

type State = {
  value: string,
}

class Search extends Component<Props, State> {
  state = {
    value: '',
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = this.state;
    if (!value.trim().length) {
      return;
    }
    const { push } = this.props;
    push('search', { search: { q: value } });
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
          <button id="search-btn" aria-label="Search" className={styles.button} type="submit">
            <IoMdSearch aria-hidden="true" className={styles.icon} />
          </button>
        </span>
      </form>
    );
  }
}

export default withRouter(Search);
