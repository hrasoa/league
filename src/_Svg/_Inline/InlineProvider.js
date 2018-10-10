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

interface Interface {
  addSvgs: $PropertyType<ProviderValue, 'addSvgs'>;

  +providerValue: $Exact<ProviderValue>;
}

const { Provider, Consumer }: Object = React.createContext();

class InlineProvider extends Component<Props, State> implements Interface {
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
    if (Object.keys(svgList).every(id => typeof svgs[id] !== 'undefined')) {
      return;
    }
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
      <Provider value={this.providerValue}>
        {children}
      </Provider>
    );
  }
}

export default InlineProvider;

export { Consumer };
