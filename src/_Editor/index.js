// @flow
import React from 'react';
import Loadable from 'react-loadable';
import type { Props } from './type';

const LoadableEditor: React$ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "editor" */ './Editor'),
  loading: () => null,
});

const LazyEditor = (props: Props) => <LoadableEditor {...props} />;

LazyEditor.defaultProps = {
  editorKey: 'editor',
  handleReturn: () => 'not-handled',
  onChange: null,
  placeholder: 'Tell a story...',
};

export default LazyEditor;
