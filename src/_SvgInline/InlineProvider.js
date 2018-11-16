/* eslint-disable react/prop-types */
// @@flow
import React, { useState } from 'react';

const SvgContext = React.createContext();

const InlineProvider = (props) => {
  const [state, setState] = useState({ svgs: {} });
  const { svgs } = state;

  function addSvgs(svgList) {
    // if every svg we want to add are already inlined
    // do nothing
    if (Object.keys(svgList).every(id => typeof svgs[id] !== 'undefined')) {
      return;
    }
    // on the server we pass the captureSvgs props
    // to pre-render them
    const { captureSvgs } = props;
    if (captureSvgs) {
      captureSvgs(svgList);
    }
    setState(currentState => ({
      ...currentState,
      svgs: { ...currentState.svgs, ...svgList },
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
