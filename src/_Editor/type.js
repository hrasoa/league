// @flow
import { EditorState } from 'draft-js';

export type Props = {
  editorKey: string,
  handleReturn: (editorState: EditorState) => string,
  onChange: ({ hasText: boolean, plainText: string }) => void,
  placeholder: string,
};
