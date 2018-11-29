import React from 'react';
import Loadable from 'react-loadable';
// import type { Props } from './type';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "lazy-picture" */ './LazyPicture'),
  loading: () => null,
});

// const LazyPicture = (props: Props) => <LoadableComponent {...props} />;
const LazyPicture = props => <LoadableComponent {...props} />;

export default LazyPicture;
