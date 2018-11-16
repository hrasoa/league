// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import type { ProviderValue } from './type';

type Props = {
  children: Node,
  captureSvgs: ?($PropertyType<ProviderValue, 'svgs'>) => void,
  inlinedIds: $PropertyType<ProviderValue, 'inlinedIds'>,
};

type State = {
  svgs: $PropertyType<ProviderValue, 'svgs'>,
};

interface I {
  addSvgs: $PropertyType<ProviderValue, 'addSvgs'>;
  +providerValue: ProviderValue;
}

const SvgContext: Object = React.createContext();

class InlineProvider extends Component<Props, State> implements I {
  static defaultProps = {
    captureSvgs: null,
    inlinedIds: [],
  }

  state = {
    svgs: {},
  }

  get providerValue() {
    const { svgs } = this.state;
    const { inlinedIds } = this.props;
    return {
      addSvgs: this.addSvgs,
      inlinedIds,
      svgs,
    };
  }

  addSvgs = (svgList) => {
    const { svgs } = this.state;
    // if every svg we want to add are already inlined
    // do nothing
    if (Object.keys(svgList).every(id => typeof svgs[id] !== 'undefined')) {
      return;
    }
    // on the server we pass the captureSvgs props
    // to pre-render them
    const { captureSvgs } = this.props;
    if (captureSvgs) {
      captureSvgs(svgList);
    }
    this.setState(state => ({
      ...state,
      svgs: { ...state.svgs, ...svgList },
    }));
  }

  render() {
    const { children } = this.props;
    return (
      <SvgContext.Provider value={this.providerValue}>
        {children}
      </SvgContext.Provider>
    );
  }
}

export default InlineProvider;

export { SvgContext };
