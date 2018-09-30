// @flow
import React, { Component } from 'react';
import wrapper from 'inuitcss/objects/_objects.wrapper.scss';
import spacings from 'inuitcss/utilities/_utilities.spacings.scss';
import classname from '../classname';
import Editor from '../_Editor/Editor';
import styles from './Search.scss';

type Props = {
  placeholder: string,
  editorKey: string,
  onChange: ({ hasText: boolean, plainText: string }) => void,
}

type State = {
  hasText: boolean,
  plainText: string,
}

class Search extends Component<Props, State> {
  state = {
    hasText: false,
    plainText: '',
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { onChange } = this.props;
    const { hasText, plainText } = this.state;
    if (onChange && prevState.plainText !== plainText) {
      onChange({ hasText, plainText });
    }
  }

  handleChange = (editorState: { hasText: boolean, plainText: string }) => {
    this.setState({
      hasText: editorState.hasText,
      plainText: editorState.plainText,
    });
  }

  render() {
    const { hasText } = this.state;
    const { placeholder, editorKey } = this.props;
    return (
      <form className={styles.root}>
        <div className={wrapper.oWrapper}>
          <div className={classname(spacings.uMarginVerticalLarge, spacings.uPaddingVerticalTiny)}>
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
