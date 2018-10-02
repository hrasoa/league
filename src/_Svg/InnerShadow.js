// @flow
import React from 'react';
import Svg from '.';

type Props = {
  color: ?string,
  id: ?string,
  stdDeviation: number,
}

const innerShadowId = 'inner-shadow';

const InnerShadow = ({ color, id, stdDeviation }: Props) => (
  <Svg>
    <filter id={id}>
      <feGaussianBlur stdDeviation={stdDeviation} result="offset-blur" />
      <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
      <feFlood floodColor={color} result="color" />
      <feComposite operator="in" in="color" in2="inverse" result="shadow" />
      <feComposite operator="over" in="shadow" in2="SourceGraphic" />
    </filter>
  </Svg>
);

InnerShadow.defaultProps = {
  color: 'black',
  id: innerShadowId,
  stdDeviation: 4,
};

export default InnerShadow;

export {
  innerShadowId as id,
};
