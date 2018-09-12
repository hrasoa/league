import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "players" */'./Players'),
  loading: () => null,
});
