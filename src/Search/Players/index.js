// @flow
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "search-players" */'./Players'),
  loading: () => null,
});
