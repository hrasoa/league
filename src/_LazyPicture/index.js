// @flow
import type { ElementConfig, ComponentType } from 'react';
import Loadable from 'react-loadable';
import typeof LazyPicture from './LazyPicture';

type Props = ElementConfig<LazyPicture>;

const LoadableLazyPicture: ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "lazy-picture" */ './LazyPicture'),
  loading: () => null,
});

export default LoadableLazyPicture;
