// @flow
import React, { Component } from 'react';
import Rect from '@reach/rect';
import WindowSize from '@reach/window-size';
import type { Props } from 'lazy-picture';
import classname from '../classname';
import defaultProps from './defaultProps';
import styles from './LazyPicture.scss';

type State = {
  loaded: boolean,
  visible: boolean,
}

type RefRect = {
  height: number,
  bottom: number,
  top: number,
}

type Size = {
  height: number
}

class LazyPicture extends Component<Props, State> {
  static defaultProps = defaultProps;

  state = {
    loaded: false,
    visible: false,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { visible, loaded } = this.state;
    return visible !== nextState.visible || loaded !== nextState.loaded;
  }

  handleOnChange = (rect: RefRect, size: Size) => {
    if (isInWindow(rect, size)) {
      this.setState({ visible: true });
    }
  }

  handleOnLoad = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded, visible } = this.state;
    const {
      alt,
      className,
      preClassName,
      rootClassName,
      image,
    } = this.props;
    const src = typeof image === 'string' ? image : image.src;
    const preSrc = typeof image === 'string' ? null : image.preSrc;
    return (
      <WindowSize>
        {(size: Size) => (
          <Rect
            observe={!visible}
            onChange={(rect: RefRect) => {
              this.handleOnChange(rect, size);
            }}
          >
            {({ ref }) => (
              <div
                ref={ref}
                className={classname(styles.root, rootClassName, loaded ? styles.loaded : '')}
              >
                {preSrc
                  && (
                    <img
                      className={classname(styles.pre, preClassName)}
                      alt={alt}
                      src={preSrc}
                    />
                  )
                }
                <picture className={classname(preSrc ? styles.hasPre : '', styles.picture)}>
                  <img
                    alt={alt}
                    className={classname(styles.image, className)}
                    src={visible ? src : null}
                    onLoad={this.handleOnLoad}
                  />
                </picture>
                <noscript>
                  <img alt={alt} className={className} src={src} />
                </noscript>
              </div>
            )}
          </Rect>
        )}
      </WindowSize>
    );
  }
}

function topOfElementIsInWindow(rect, size): boolean {
  return rect.top <= size.height;
}

function bottomOfElementIsInWindow(rect, size): boolean {
  return rect.bottom <= size.height && rect.bottom >= 0;
}

function isInWindow(rect, size): boolean {
  return topOfElementIsInWindow(rect, size)
    && bottomOfElementIsInWindow(rect, size);
}

export default LazyPicture;
