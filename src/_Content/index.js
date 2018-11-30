// @flow
import Loadable from 'react-loadable';
import type { Props } from './Content';

const LoadableContent: React$ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "content" */ './Content'),
  loading: () => null,
});

export default LoadableContent;
