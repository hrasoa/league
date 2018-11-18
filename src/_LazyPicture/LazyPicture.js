/* eslint-disable react/prop-types */
// @@flow
import React, { useState } from 'react';
import classnames from 'classnames';
import Visible from '../_Visible';
import defaultProps from './defaultProps';
import styles from './LazyPicture.scss';

const LazyPicture = (props) => {
  const [loaded, setLoaded] = useState(false);

  function handleOnLoad() {
    setLoaded(true);
  }

  const {
    alt,
    className,
    styles: s,
    image: { src, preSrc },
  } = props;
  return (
    <Visible once>
      {({ ref, visible }) => (
        <div
          ref={ref}
          className={classnames(styles.root, className, loaded && styles.loaded)}
        >
          <div className={classnames((s && s.ratio) || styles.ratio)} />
          <img
            className={classnames(styles.pre, s && s.pre)}
            alt={alt}
            src={preSrc}
          />
          <picture className={styles.picture}>
            <img
              alt={alt}
              className={classnames(styles.image, s && s.image)}
              src={visible ? src : null}
              onLoad={handleOnLoad}
            />
            <noscript>
              <img alt={alt} className={className} src={src} />
            </noscript>
          </picture>
        </div>
      )}
    </Visible>
  );
};

LazyPicture.defaultProps = defaultProps;

export default LazyPicture;
