// @flow
import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node,
  id: string,
  viewBox: string
}

const ClipPath = ({ id, viewBox, children }: Props) => {
  const [minX, minY, w, h] = viewBox;
  const scaleX = 1 / parseInt(w, 10);
  const scaleY = 1 / parseInt(h, 10);
  return (
    <svg
      height="0"
      viewBox={[minX, minY, w, h].join(' ')}
      width="0"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath
          clipPathUnits="objectBoundingBox"
          id={id}
          transform={`scale(${scaleX} ${scaleY})`}
        >
          {children}
        </clipPath>
      </defs>
    </svg>
  );
};

export default ClipPath;
