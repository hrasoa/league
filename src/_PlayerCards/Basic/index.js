import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "player-card-basic" */'./Card'),
  loading: () => null,
});
