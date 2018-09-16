// @flow
import React, { Component } from 'react';
import { oWrapper } from 'inuitcss/objects/_objects.wrapper.scss';
import {
  uMarginVerticalLarge,
  uPaddingVerticalTiny,
} from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Editor from '../Editor';
import styles from './Search.scss';

type Props = {
  placeholder: string,
  editorKey: string
}

type State = {
  hasText: boolean
}

class Search extends Component<Props, State> {
  state = {
    hasText: false,
  }

  handleChange = (editorState: EditorState) => {
    this.setState({
      hasText: editorState.getCurrentContent().hasText(),
    });
  }

  render() {
    const { hasText } = this.state;
    const { placeholder, editorKey } = this.props;
    return (
      <form className={styles.root}>
        <div className={oWrapper}>
          <div className={classname(uMarginVerticalLarge, uPaddingVerticalTiny)}>
            <div className={classname(styles.editor, hasText ? styles.hasText : '')}>
              <Editor
                editorKey={editorKey}
                handleReturn={() => 'handled'}
                placeholder={placeholder}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
