// @flow
import React, { Component } from 'react';
import type { Props } from 'lazy-picture';
import Visible from '../_Visible';
import classname from '../classname';
import defaultProps from './defaultProps';
import styles from './LazyPicture.scss';

type State = {
  loaded: boolean,
}

class LazyPicture extends Component<Props, State> {
  static defaultProps = defaultProps;

  state = {
    loaded: false,
  };

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const { loaded } = this.state;
    return loaded !== nextState.loaded;
  }

  handleOnLoad = () => {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
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
      <Visible once>
        {({ ref, visible }) => (
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
              <noscript>
                <img alt={alt} className={className} src={src} />
              </noscript>
            </picture>
          </div>
        )}
      </Visible>
    );
  }
}

export default LazyPicture;
