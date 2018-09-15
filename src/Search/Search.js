// @flow
import React from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uMarginVerticalLarge, uPaddingVerticalTiny } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Editor from '../Editor';
import styles from './Search.scss';

type Props = {
  placeholder: string
}

const Search = ({ placeholder }: Props) => (
  <div className={styles.root}>
    <div className={oWrapper}>
      <div className={classname(uMarginVerticalLarge, uPaddingVerticalTiny)}>
        <div className={styles.editor}>
          <Editor
            handleReturn={() => 'handled'}
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  </div>
);

Search.defaultProps = {
  placeholder: 'Search ...',
};

export default Search;
