import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "listing" */'./Listing'),
  loading: () => null,
});
