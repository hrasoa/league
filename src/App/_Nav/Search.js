// @flow
import React, { Component } from 'react';
import { IoMdSearch } from 'react-icons/io';
import styles from './Search.scss';

type State = {
  value: string,
}

class Search extends Component<{}, State> {
  state = {
    value: '',
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ value: event.currentTarget.value });
  }

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    const { value } = this.state;
    console.log(`A name was submitted${value}`);
    event.preventDefault();
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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

export default Search;
