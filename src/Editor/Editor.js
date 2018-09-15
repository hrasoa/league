// @flow
import React, { Component } from 'react';
import Draft, {
  Editor as DraftEditor,
  EditorState,
} from 'draft-js';

type Props = {
  editorKey: string,
  handleReturn: (editorState: EditorState) => string,
  placeholder: string
}

type State = {
  editorState: EditorState
}

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
    placeholder: 'Tell a story...',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(emptyContentState),
    };
  }

  handleReturn = (): string => {
    const { editorState } = this.state;
    const { handleReturn } = this.props;
    return handleReturn ? handleReturn(editorState) : 'not-handled';
  }

  onChange = (editorState: EditorState) => this.setState({ editorState });

  render() {
    const { editorState } = this.state;
    const { placeholder, editorKey } = this.props;
    return (
      <DraftEditor
        editorKey={editorKey}
        handleReturn={this.handleReturn}
        placeholder={placeholder}
        editorState={editorState}
        onChange={this.onChange}
      />
    );
  }
}

export default Editor;
