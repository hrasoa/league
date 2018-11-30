// @flow
import Loadable from 'react-loadable';
import type { Props } from './Card';

const LoadableCard: React$ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "player-card-basic" */ './Card'),
  loading: () => null,
});

export default LoadableCard;
