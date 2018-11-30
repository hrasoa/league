// @flow
import React, { useState } from 'react';
import type { ProviderValue, Props } from './type';

const SvgContext: Object = React.createContext();

const InlineProvider = (props: Props) => {
  const [svgs, setSvgs] = useState({});

  function addSvgs(svgList: $PropertyType<ProviderValue, 'svgs'>) {
    // if every svg we want to add are already inlined
    // do nothing
    if (Object.keys(svgList).every(id => typeof svgs[id] !== 'undefined')) {
      return;
    }
    // on the server we pass the captureSvgs props for pre-render
    const { captureSvgs } = props;
    if (captureSvgs) {
      captureSvgs(svgList);
    }
    setSvgs({
      ...svgs,
      ...svgList,
    });
  }

  const { children, inlinedIds } = props;
  return (
    <SvgContext.Provider
      value={{
        addSvgs,
        inlinedIds,
        svgs,
      }}
    >
      {children}
    </SvgContext.Provider>
  );
};

InlineProvider.defaultProps = {
  captureSvgs: null,
  inlinedIds: [],
};

export default InlineProvider;

export { SvgContext };
