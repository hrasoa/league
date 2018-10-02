// @flow
import type { Node } from 'react';

export type Props = {
  children: ({ ref: any, visible: boolean }) => Node,
  once: boolean,
  onVisibilityChange: ?(visible: boolean) => void,
};
