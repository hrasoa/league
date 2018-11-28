import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "search-all" */ './All'),
  loading: () => null,
});
