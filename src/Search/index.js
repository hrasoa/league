// @flow
import React from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uH1 } from 'inuitcss/utilities/_utilities.headings.scss';
import { uMarginVerticalLarge } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import styles from './Search.scss';

type Props = {
  id: string,
  placeholder?: string
}

const Search = ({ id, placeholder }: Props) => (
  <div className="search">
    <form>
      <div className={oWrapper}>
        <label htmlFor={id}>
          <input
            id={id}
            className={classname(styles.input, uH1, uMarginVerticalLarge)}
            placeholder={placeholder}
          />
        </label>
      </div>
      <div className={styles.filters}>
        <div className={oWrapper}>
          filters
        </div>
      </div>
    </form>
  </div>
);

Search.defaultProps = {
  placeholder: 'Search ...',
};

export default Search;
