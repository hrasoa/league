/* eslint-disable react/prop-types */
// @@flow
import React, { useState } from 'react';
import classnames from 'classnames';
import Visible from '../_Visible';
import defaultProps from './defaultProps';
import baseStyles from './LazyPicture.scss';

const LazyPicture = (props) => {
  const [loaded, setLoaded] = useState(false);

  function handleOnLoad() {
    setLoaded(true);
  }

  const {
    alt,
    styles,
    image: { src, preSrc },
  } = props;
  const s = { ...baseStyles, ...styles };
  return (
    <Visible once>
      {({ ref, visible }) => (
        <div
          ref={ref}
          className={classnames(s.root, loaded && s.loaded)}
        >
          <div className={s.ratio} />
          <img
            className={s.pre}
            alt={alt}
            src={preSrc}
          />
          <picture className={s.picture}>
            <img
              alt={alt}
              className={s.image}
              src={visible ? src : null}
              onLoad={handleOnLoad}
            />
            <noscript>
              <img alt={alt} src={src} />
            </noscript>
          </picture>
        </div>
      )}
    </Visible>
  );
};

LazyPicture.defaultProps = defaultProps;

export default LazyPicture;
