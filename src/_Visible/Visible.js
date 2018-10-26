// @flow
import React, { Component } from 'react';
import Rect from '@reach/rect';
import WindowSize from '@reach/window-size';
import type { Props } from './type';
import defaultProps from './defaultProps';

type State = {
  visible: boolean,
};

type BoundingRect = {
  height: number,
  left: number,
  bottom: number,
  right: number,
  top: number,
  width: number,
};

type WinSize = {
  height: number,
  width: number,
};

class Visible extends Component<Props, State> {
  static defaultProps = defaultProps;

  state = {
    visible: false,
  };

  componentDidUpdate() {
    const { onVisibilityChange } = this.props;
    const { visible } = this.state;
    if (onVisibilityChange) {
      onVisibilityChange(visible);
    }
  }

  handleOnChange = (rect: BoundingRect, size: WinSize) => {
    if (isInWindow(rect, size)) {
      this.setState({ visible: true });
    }
  }

  render() {
    const { visible } = this.state;
    const { children, once } = this.props;
    return (
      <WindowSize>
        {(size: WinSize) => (
          <Rect
            observe={!(once && visible)}
            onChange={(rect: BoundingRect) => {
              this.handleOnChange(rect, size);
            }}
          >
            {({ ref }) => children({ ref, visible })}
          </Rect>
        )}
      </WindowSize>
    );
  }
}

function isInWindow(rect, size): boolean {
  return isVerticallyInWindow(rect, size) && isHorizontallyInWindow(rect, size);
}

function isVerticallyInWindow(rect, size): boolean {
  return (rect.top <= size.height && rect.bottom >= 0)
    || (rect.top <= 0 && rect.bottom >= 0);
}

function isHorizontallyInWindow(rect, size): boolean {
  return rect.left <= size.width;
}

export default Visible;
