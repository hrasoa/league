// @flow
import React from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uH1 } from 'inuitcss/utilities/_utilities.headings.scss';
import { uMarginVerticalLarge, uPaddingVerticalTiny } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import styles from './Search.scss';

type Props = {
  id: string,
  placeholder?: string
}

const Search = ({ id, placeholder }: Props) => (
  <div>
    <form>
      <div className={oWrapper}>
        <label htmlFor={id}>
          <input
            id={id}
            className={classname(styles.input, uH1, uMarginVerticalLarge, uPaddingVerticalTiny)}
            placeholder={placeholder}
          />
        </label>
      </div>
    </form>
  </div>
);

Search.defaultProps = {
  placeholder: 'Search ...',
};

export default Search;
