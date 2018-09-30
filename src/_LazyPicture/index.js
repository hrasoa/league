// @flow
import React from 'react';
import Loadable from 'react-loadable';
import defaultProps from './defaultProps';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "lazy-picture" */'./LazyPicture'),
  loading: () => null,
});

const LazyPicture = (props: LazyPictureProps) => <LoadableComponent {...props} />;

LazyPicture.displayName = 'Loadable(LazyPicture)';
LazyPicture.defaultProps = defaultProps;

export default LazyPicture;
