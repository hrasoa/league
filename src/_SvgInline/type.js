// @flow
import type { ComponentType, Node } from 'react';

export type ProviderValue = {
  addSvgs: ({ [id: string]: ComponentType<any> }) => void,
  svgs: { [id: string]: ComponentType<any> },
  inlinedIds: Array<string>,
};

export type Props = {
  captureSvgs: ?($PropertyType<ProviderValue, 'svgs'>) => void,
  children: Node,
  inlinedIds: Array<string>,
};
