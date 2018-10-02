// @flow
import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';
import type { ProviderValue } from './type';

type Props = {
  children: Node,
  captureSvgs: ?({ [id: string]: ComponentType<any> }) => void,
  svgInlinedIds: Array<string>,
}

type State = {
  svgs: { [id: string]: ComponentType<any> },
}

const { Provider, Consumer }: Object = React.createContext();

class Inline extends Component<Props, State> {
  static defaultProps = {
    captureSvgs: null,
    svgInlinedIds: [],
  }

  state = {
    svgs: {},
  }

  get providerValue(): ProviderValue {
    const { svgs } = this.state;
    const { svgInlinedIds } = this.props;
    return {
      addSvgs: this.addSvgs,
      svgInlinedIds,
      svgs,
    };
  }

  addSvgs = (svgs: { [id: string]: ComponentType<any> }) => {
    const { captureSvgs } = this.props;
    if (captureSvgs) {
      captureSvgs(svgs);
    }
    this.setState(state => ({
      ...state,
      svgs: { ...state.svgs, ...svgs },
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

export default Inline;

export { Consumer };
