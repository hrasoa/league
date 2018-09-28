// @flow
import React, { Component } from 'react';
import Rect from '@reach/rect';
import WindowSize from '@reach/window-size';
import classname from '../classname';
import styles from './LazyPicture.scss';

type Props = {
  alt: string,
  className: string,
  preClassName: string,
  pictureClassName: string,
  preSrc: string,
  src: string
}

type State = {
  loaded: boolean,
  visible: boolean,
}

class Picture extends Component<Props, State> {
  state = {
    loaded: false,
    visible: false,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { visible, loaded } = this.state;
    return visible !== nextState.visible || loaded !== nextState.loaded;
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
      pictureClassName,
    } = this.props;
    return (
      <WindowSize>
        {size => (
          <Rect
            observe={!visible}
            onChange={(rect) => {
              if (rect.top <= size.height && rect.bottom >= 0) {
                this.setState({ visible: true });
              }
            }}
          >
            {({ ref }) => (
              <picture className={classname(styles.root, pictureClassName, loaded ? styles.loaded : '')}>
                <img
                  ref={ref}
                  className={classname(styles.pre, preClassName)}
                  alt={alt}
                  src={preSrc}
                />
                <img
                  alt={alt}
                  className={classname(styles.image, className)}
                  src={visible ? src : null}
                  data-src={src}
                  onLoad={this.handleOnLoad}
                />
                <noscript>
                  <img alt={alt} className={className} src={src} />
                </noscript>
              </picture>
            )}
          </Rect>
        )}
      </WindowSize>
    );
  }
}

export default Picture;