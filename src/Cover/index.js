import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Cover'),
  loading: () => null,
});
