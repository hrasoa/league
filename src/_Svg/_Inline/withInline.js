// @flow
import React, { Component } from 'react';
import type { Node, ComponentType } from 'react';
import type { ProviderValue } from './type';
import { Consumer } from './InlineProvider';

type PropsInput = any;

type PropsOutput = any;

type AddSvgProps = {
  addSvgs: ?$PropertyType<ProviderValue, 'addSvgs'>,
  children: Node,
}

function withInline(svgs: $PropertyType<ProviderValue, 'svgs'>): (ComponentType<PropsOutput>) => ComponentType<PropsInput> {
  return (WrappedComponent) => {
    class AddSvg extends Component<AddSvgProps> {
      constructor(props: AddSvgProps) {
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
