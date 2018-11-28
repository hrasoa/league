import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Home'),
  loading: () => null,
});
