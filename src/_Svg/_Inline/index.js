// @flow
import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';
import type { ProviderValue } from './type';

type State = {
  svgs: { [id: string]: ComponentType<any> },
}

const { Provider, Consumer }: Object = React.createContext();

class Inline extends Component<{ children: Node }, State> {
  state = {
    svgs: {},
  }

  get providerValue(): ProviderValue {
    return {
      addSvgs: this.addSvgs,
    };
  }

  addSvgs = (svgs: { [id: string]: ComponentType<any> }) => {
    this.setState(state => ({
      ...state,
      svgs: { ...state.svgs, ...svgs },
    }));
  }

  render() {
    const { svgs } = this.state;
    const { children } = this.props;
    return (
      <Provider value={this.providerValue}>
        {children}
        <div id="svgs">
          {Object.keys(svgs).map((svgId) => {
            const Svg = svgs[svgId];
            return <Svg key={svgId} />;
          })}
        </div>
      </Provider>
    );
  }
}

export default Inline;

export { Consumer };
