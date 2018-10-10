// @flow
import React, { Component } from 'react';
import classname from 'classnames';
import Visible from '../_Visible';
import type { Props } from './type';
import defaultProps from './defaultProps';
import styles from './LazyPicture.scss';

type State = {
  loaded: boolean,
};

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
      imageClassName,
      preClassName,
      ratioClassName,
      image,
    } = this.props;
    const { src, preSrc } = image;
    return (
      <Visible once>
        {({ ref, visible }) => (
          <div
            ref={ref}
            className={classname(styles.root, className, loaded ? styles.loaded : '')}
          >
            <div className={classname(ratioClassName || styles.ratio)} />
            <img
              className={classname(styles.pre, preClassName)}
              alt={alt}
              src={preSrc}
            />
            <picture className={classname(styles.picture)}>
              <img
                alt={alt}
                className={classname(styles.image, imageClassName)}
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
