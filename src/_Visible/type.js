// @flow
import type { Node } from 'react';

declare module 'visible' {
  declare export type Props = {
    children: ({ ref: any, visible: boolean }) => Node,
    once: boolean,
    onVisibilityChange: ?(visible: boolean) => void,
  };
}
