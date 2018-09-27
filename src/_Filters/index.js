import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "filters" */'./Filters'),
  loading: () => null,
});
