// @flow
import type { ComponentType } from 'react';

export type ProviderValue = {
  addSvgs: ({ [id: string]: ComponentType<any> }) => void,
  svgs: { [id: string]: ComponentType<any> },
  svgInlinedIds: Array<string>,
};
