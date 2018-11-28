import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "editor" */ './Editor'),
  loading: () => null,
});
