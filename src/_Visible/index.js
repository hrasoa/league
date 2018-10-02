// @flow
import React from 'react';
import Loadable from 'react-loadable';
import type { Props } from './type';
import defaultProps from './defaultProps';

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "visible" */'./Visible'),
  loading: () => null,
});

const Visible = (props: Props) => <LoadableComponent {...props} />;

Visible.defaultProps = defaultProps;

export default Visible;
