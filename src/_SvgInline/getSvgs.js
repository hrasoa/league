// @flow
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ProviderValue } from './InlineProvider';

type Input = Array<$PropertyType<ProviderValue, 'svgs'>>;

type Output = {
  ids: Array<string>,
  markup: string,
};

export default (svgs: Input): Output => {
  const inlined: $PropertyType<ProviderValue, 'svgs'> = svgs.reduce(
    (acc, svg) => ({ ...acc, ...svg }),
    {}
  );
  const markup = Object.keys(inlined)
    .map(svgId => {
      const Svg = inlined[svgId];
      return renderToStaticMarkup(<Svg />);
    })
    .join('');

  return {
    ids: Object.keys(inlined),
    markup,
  };
};
