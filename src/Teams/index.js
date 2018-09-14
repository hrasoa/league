import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "teams" */'./Teams'),
  loading: () => null,
});
