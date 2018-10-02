// @flow
import React from 'react';
import type { ComponentType } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

type Input = Array<{ [id: string]: ComponentType<any> }>

type Output = {
  svgIds: Array<string>,
  svgMarkup: string,
}

export default (svgs: Input): Output => {
  const inlined = svgs.reduce((acc, svg) => ({ ...acc, ...svg }), {});
  const markup = Object.keys(inlined).map((svgId) => {
    const Svg = inlined[svgId];
    return renderToStaticMarkup(<Svg />);
  }).join('');

  return {
    svgIds: Object.keys(inlined),
    svgMarkup: markup,
  };
};
