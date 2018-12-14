// @flow
import type { ElementConfig, ComponentType } from 'react';
import Loadable from 'react-loadable';
import typeof Card from './Card';

type Props = ElementConfig<Card>;

const LoadableCard: ComponentType<Props> = Loadable({
  loader: () => import(/* webpackChunkName: "player-card-basic" */ './Card'),
  loading: () => null,
});

export default LoadableCard;
