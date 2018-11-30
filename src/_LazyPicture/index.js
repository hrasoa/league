// @flow
import Loadable from 'react-loadable';
import typeof LazyPicture from './LazyPicture';

type Props = React$ElementProps<LazyPicture>;

const LoadableLazyPicture: React$ComponentType<$Shape<Props>> = Loadable({
  loader: () => import(/* webpackChunkName: "lazy-picture" */ './LazyPicture'),
  loading: () => null,
});

export default LoadableLazyPicture;
