// @flow
import React, { Component } from 'react';
import Draft, { Editor, EditorState } from 'draft-js';

type Props = {
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

class Input extends Component<Props, State> {
  static defaultProps = {
    placeholder: 'Search...',
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      editorState: EditorState.createWithContent(emptyContentState),
    };
    this.onChange = editorState => this.setState({ editorState });
  }

  onChange: Function

  render() {
    const { editorState } = this.state;
    const { placeholder } = this.props;
    return (
      <div style={{ border: '1px solid black', padding: 10 }}>
        <Editor
          editorKey="editor"
          placeholder={placeholder}
          editorState={editorState}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Input;
