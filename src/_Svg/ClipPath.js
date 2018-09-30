// @flow
import React from 'react';
import type { Node } from 'react';
import Svg from './Svg';

type Props = {
  children: Node,
  id: string,
  viewBox: string,
}

const ClipPath = ({ id, viewBox, children }: Props) => {
  const [w, h] = viewBox.split(' ').slice(2);
  const scaleX = 1 / parseInt(w, 10);
  const scaleY = 1 / parseInt(h, 10);
  return (
    <Svg
      height={0}
      viewBox={viewBox}
      width={0}
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
    </Svg>
  );
};

export default ClipPath;
