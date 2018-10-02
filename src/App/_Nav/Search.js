// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import styles from './Search.scss';

type Props = {
  history: RouterHistory,
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
    const { history } = this.props;
    const action = event.currentTarget.getAttribute('action') || '/search';
    history.push(`${action}?q=${value}`);
  }

  render() {
    const { value } = this.state;
    return (
      <form action="/search" onSubmit={this.handleSubmit}>
        <span className={styles.root}>
          <input
            name="q"
            className={styles.input}
            placeholder="Search..."
            type="search"
            value={value}
            onChange={this.handleChange}
          />
          <button className={styles.button} type="submit">
            <IoMdSearch className={styles.icon} />
          </button>
        </span>
      </form>
    );
  }
}

export default withRouter(Search);
