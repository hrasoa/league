import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "search" */'./Search'),
  loading: () => null,
});
