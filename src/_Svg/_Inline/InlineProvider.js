// @flow
import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';
import type { ProviderValue } from './type';

type Props = {
  children: Node,
  captureSvgs: ?({ [id: string]: ComponentType<any> }) => void,
  inlinedIds: Array<string>,
}

type State = {
  svgs: { [id: string]: ComponentType<any> },
}

const { Provider, Consumer }: Object = React.createContext();

class InlineProvider extends Component<Props, State> {
  static defaultProps = {
    captureSvgs: null,
    inlinedIds: [],
  }

  state = {
    svgs: {},
  }

  get providerValue(): $Exact<ProviderValue> {
    const { svgs } = this.state;
    const { inlinedIds } = this.props;
    return {
      addSvgs: this.addSvgs,
      inlinedIds,
      svgs,
    };
  }

  addSvgs = (svgList: { [id: string]: ComponentType<any> }) => {
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
