// @flow
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "content" */'./Content'),
  loading: () => null,
});
