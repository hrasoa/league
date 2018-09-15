// @flow
import React from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uMarginVerticalLarge, uPaddingVerticalTiny } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Editor from './Editor';
import styles from './Search.scss';

type Props = {
  placeholder?: string
}

const Search = ({ placeholder }: Props) => (
  <form className={styles.root}>
    <div className={oWrapper}>
      <div className={classname(uMarginVerticalLarge, uPaddingVerticalTiny)}>
        <Editor placeholder={placeholder} />
      </div>
    </div>
  </form>
);

Search.defaultProps = {
  placeholder: 'Search ...',
};

export default Search;
