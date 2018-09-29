import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "lazy-picture" */'./LazyPicture'),
  loading: () => null,
});
