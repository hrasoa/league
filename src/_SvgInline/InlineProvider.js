/* eslint-disable react/prop-types */
// @@flow
import React, { useState } from 'react';

const SvgContext = React.createContext();

const InlineProvider = props => {
  const [svgs, setSvgs] = useState({});

  function addSvgs(svgList) {
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
    setSvgs(state => ({
      ...state,
      ...svgList,
    }));
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
