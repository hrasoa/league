import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "team-card-basic" */ './Card'),
  loading: () => null,
});
