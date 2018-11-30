// @flow
import type { ElementConfig, ComponentType } from 'react';
import Loadable from 'react-loadable';
import typeof Content from './Content';

type Props = ElementConfig<Content>;

// $FlowFixMe: wait until next release
const LoadableContent: ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "content" */ './Content'),
  loading: () => null,
});

export default LoadableContent;
