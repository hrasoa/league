// @flow
import React, { Component } from 'react';
import Draft, {
  Editor as DraftEditor,
  EditorState,
} from 'draft-js';

type Props = {
  editorKey?: string,
  placeholder?: string
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
    placeholder: 'Tell a story...',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(emptyContentState),
    };
  }

  handleReturn = (): string => 'handled';

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
