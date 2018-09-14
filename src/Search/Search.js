// @flow
import React from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uMarginVerticalLarge, uPaddingVerticalTiny } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import styles from './Search.scss';

type Props = {
  id: string,
  placeholder?: string
}

const Search = ({ id, placeholder }: Props) => (
  <form className={styles.root}>
    <div className={oWrapper}>
      <label htmlFor={id} className={styles.label}>
        <input
          id={id}
          className={classname(styles.input, uMarginVerticalLarge, uPaddingVerticalTiny)}
          placeholder={placeholder}
        />
      </label>
    </div>
  </form>
);

Search.defaultProps = {
  placeholder: 'Search ...',
};

export default Search;
