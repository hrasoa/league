// @flow
import React, { Component } from 'react';
import Rect from '@reach/rect';
import WindowSize from '@reach/window-size';
import classname from '../classname';
import styles from './LazyPicture.scss';
import defaultProps from './defaultProps';

type State = {
  loaded: boolean,
  visible: boolean,
}

type RefRect = {
  bottom: number,
  top: number,
}

type Size = {
  height: number
}

class Picture extends Component<LazyPictureProps, State> {
  static defaultProps = defaultProps;

  state = {
    loaded: false,
    visible: false,
  };

  shouldComponentUpdate(nextProps: LazyPictureProps, nextState: State) {
    const { visible, loaded } = this.state;
    return visible !== nextState.visible || loaded !== nextState.loaded;
  }

  handleOnChange = (rect: RefRect, size: Size) => {
    if (rect.top <= size.height && rect.bottom >= 0) {
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
      preSrc,
      src,
      className,
      preClassName,
      rootClassName,
    } = this.props;
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
                <img
                  className={classname(styles.pre, preClassName)}
                  alt={alt}
                  src={preSrc}
                />
                <picture className={styles.picture}>
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

export default Picture;
