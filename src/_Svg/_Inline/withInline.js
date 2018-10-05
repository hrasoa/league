// @flow
import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';
import type { ProviderValue } from './type';
import { Consumer } from './InlineProvider';

type PropsInput = any;

type PropsOutput = any;

type AddSvgProps = {
  addSvgs: ?({ [id: string]: ComponentType<any> }) => void,
  children: Node,
}

type Svgs = { [id: string]: ComponentType<any> };

function withInline(svgs: Svgs): (ComponentType<PropsOutput>) => ComponentType<PropsInput> {
  return (WrappedComponent) => {
    class AddSvg extends Component<AddSvgProps> {
      constructor(props) {
        super(props);
        const { addSvgs } = this.props;
        if (addSvgs) {
          addSvgs(svgs);
        }
      }

      render() {
        const { children } = this.props;
        return children;
      }
    }

    function Inline(ownProps: {}) {
      return (
        <Consumer>
          {(value: ?ProviderValue) => (
            <AddSvg addSvgs={value ? value.addSvgs : null}>
              <WrappedComponent {...ownProps} />
            </AddSvg>
          )}
        </Consumer>
      );
    }

    return Inline;
  };
}

export default withInline;
