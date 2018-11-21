/* eslint-disable react/prop-types */
// @@flow
import React, { useLayoutEffect, useState, useRef } from 'react';
import observeRect from '@reach/observe-rect/src';
import classnames from 'classnames';
import defaultProps from './defaultProps';
import baseStyles from './LazyPicture.scss';

const LazyPicture = (props) => {
  const ref = useRef(null);
  const rectObserver = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    if (loaded) {
      rectObserver.current.unobserve();
    } else if (!rectObserver.current) {
      rectObserver.current = observeRect(ref.current, (rect) => {
        const inWindow = isInWindow(rect);
        setVisible(inWindow);
      });
      rectObserver.current.observe();
    }
    return () => {
      rectObserver.current.unobserve();
    };
  }, [loaded]);

  function handleOnLoad() {
    setLoaded(true);
  }

  const {
    alt,
    styles,
    id,
    image: { src, preSrc },
  } = props;
  const s = { ...baseStyles, ...styles };
  return (
    <div
      ref={ref}
      id={id}
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

function isInWindow(rect) {
  const size = {
    height: window.innerHeight,
    width: window.innerHeight,
  };
  return isVerticallyInWindow(rect, size) && isHorizontallyInWindow(rect, size);
}

function isVerticallyInWindow(rect, size) {
  return (rect.top <= size.height && rect.bottom >= 0)
    || (rect.top <= 0 && rect.bottom >= 0);
}

function isHorizontallyInWindow(rect, size) {
  return rect.left <= size.width;
}

export default LazyPicture;
