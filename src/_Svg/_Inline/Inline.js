// @flow
import React from 'react';
import { createPortal } from 'react-dom';
import type { ProviderValue } from './type';
import { Consumer } from './InlineProvider';

const root = document.getElementById('svgs');

const Inline = () => (
  <Consumer>
    {(value: ProviderValue) => (
      root !== null
      && createPortal(
        Object.keys((value && value.svgs) || {}).map((svgId) => {
          // return if an svg was already pre-rendered from server
          if (value.inlinedIds.indexOf(svgId) >= 0) {
            return null;
          }
          const Svg = value.svgs[svgId];
          return <Svg key={svgId} />;
        }),
        root,
      )
    )}
  </Consumer>
);

export default Inline;
