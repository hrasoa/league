// @flow
import React from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import { uMarginVerticalLarge, uPaddingVerticalTiny } from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Editor from '../Editor';
import styles from './Search.scss';

type Props = {
  placeholder: string,
  editorKey: string
}

const Search = ({ placeholder, editorKey }: Props) => (
  <form className={styles.root}>
    <div className={oWrapper}>
      <div className={classname(uMarginVerticalLarge, uPaddingVerticalTiny)}>
        <div className={styles.editor}>
          <Editor
            editorKey={editorKey}
            handleReturn={() => 'handled'}
            placeholder={placeholder}
            onChange={(editorState) => {
              console.log(editorState.getCurrentContent().hasText());
              console.log(editorState.getCurrentContent().getPlainText());
            }}
          />
        </div>
      </div>
    </div>
  </form>
);

export default Search;
