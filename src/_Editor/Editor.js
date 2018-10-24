// @flow
import React, { Component } from 'react';
import { is } from 'immutable';
import Draft, {
  Editor as DraftEditor,
  EditorState,
} from 'draft-js';
import styles from './Editor.scss';

type Props = {
  editorKey: string,
  handleReturn: (editorState: EditorState) => string,
  onChange: ({ hasText: boolean, plainText: string }) => void,
  placeholder: string,
};

type State = {
  editorState: EditorState,
};

const emptyContentState = Draft.convertFromRaw({
  blocks: [
    {
      depth: 0,
      entityRanges: [],
      inlineStyleRanges: [],
      key: 'foo',
      text: '',
      type: 'unstyled',
    },
  ],
  entityMap: {},
});

class Editor extends Component<Props, State> {
  static defaultProps = {
    editorKey: 'editor',
    handleReturn: () => 'not-handled',
    onChange: null,
    placeholder: 'Tell a story...',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(emptyContentState),
    };
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { onChange } = this.props;
    if (!onChange) {
      return;
    }
    const { editorState: prevEditorState } = prevState;
    const { editorState } = this.state;
    const prevContentState = prevEditorState.getCurrentContent();
    const contentState = editorState.getCurrentContent();
    const prevPlainText = prevContentState.getPlainText();
    const plainText = contentState.getPlainText();
    const prevBlockMap = prevContentState.getBlockMap();
    const blockMap = contentState.getBlockMap();
    if (
      plainText !== prevPlainText
      && !is(blockMap, prevBlockMap)
    ) {
      onChange({
        hasText: contentState.hasText(),
        plainText,
      });
    }
  }

  handleReturn = (): string => {
    const { editorState } = this.state;
    const { handleReturn } = this.props;
    return handleReturn(editorState);
  }

  handleChange = (editorState: EditorState) => this.setState({ editorState });

  render() {
    const { editorState } = this.state;
    const { placeholder, editorKey } = this.props;
    return (
      <DraftEditor
        className={styles.DraftEditorRoot}
        editorKey={editorKey}
        editorState={editorState}
        handleReturn={this.handleReturn}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default Editor;
