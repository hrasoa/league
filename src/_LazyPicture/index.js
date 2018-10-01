// @flow
import React from 'react';
import Loadable from 'react-loadable';
import type { Props } from 'lazy-picture';
import defaultProps from './defaultProps';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "lazy-picture" */'./LazyPicture'),
  loading: () => null,
});

const LazyPicture = (props: Props) => <LoadableComponent {...props} />;

LazyPicture.defaultProps = defaultProps;

export default LazyPicture;
