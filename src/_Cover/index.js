import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "cover" */'./Cover'),
  loading: () => null,
});
