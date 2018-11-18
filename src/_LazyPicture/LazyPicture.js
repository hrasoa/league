/* eslint-disable react/prop-types */
// @@flow
import React, { useState, useRef } from 'react';
import classnames from 'classnames';
import useVisible from '../useVisible';
import defaultProps from './defaultProps';
import baseStyles from './LazyPicture.scss';

const LazyPicture = (props) => {
  const ref = useRef(null);
  const visible = useVisible(ref);
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
  );
};

LazyPicture.defaultProps = defaultProps;

export default LazyPicture;
