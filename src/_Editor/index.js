// @flow
import type { ElementConfig, ComponentType } from 'react';
import Loadable from 'react-loadable';
import typeof Editor from './Editor';

type Props = ElementConfig<Editor>;

// $FlowFixMe: issue with defaultProps
const LoadableEditor: ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "editor" */ './Editor'),
  loading: () => null,
});

export default LoadableEditor;
