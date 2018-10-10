// @flow
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "player-card" */'./Card'),
  loading: () => null,
});
