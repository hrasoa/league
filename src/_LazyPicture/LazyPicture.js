// @flow
import React, { useEffect, useState, useRef } from 'react';
import observeRect from '@reach/observe-rect';
import classnames from 'classnames';
import baseStyles from './LazyPicture.scss';

type Styles = {
  root: string,
  loaded: string,
  pre: string,
  picture: string,
  image: string,
  ratio: string,
};

type Props = {
  alt: string,
  image: { src: string, preSrc: string },
  styles: ?Styles,
};

const LazyPicture = (props: Props) => {
  const ref = useRef(null);
  const rectObserver = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        if (rectObserver.current) {
          rectObserver.current.unobserve();
        }
      }, 0);
    }
  }, [loaded]);

  useEffect(() => {
    if (!loaded && !rectObserver.current) {
      rectObserver.current = observeRect(ref.current, rect => {
        setVisible(isInWindow(rect));
      });
      rectObserver.current.observe();
    }
    return () => {
      if (rectObserver.current) {
        rectObserver.current.unobserve();
      }
    };
  }, [loaded]);

  function handleOnLoad() {
    setLoaded(true);
  }

  const {
    alt,
    styles,
    image: { src, preSrc },
  } = props;
  const s: Styles = { ...baseStyles, ...styles };
  return (
    <div ref={ref} className={classnames(s.root, loaded && s.loaded)}>
      <div className={s.ratio} />
      <img className={s.pre} alt={alt} src={preSrc} />
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

LazyPicture.defaultProps = {
  styles: null,
};

export default LazyPicture;

function isInWindow(rect: { top: number, left: number, bottom: number }) {
  const size: { height: number, width: number } = {
    height: window.innerHeight,
    width: window.innerHeight,
  };
  return isVerticallyInWindow(rect, size) && isHorizontallyInWindow(rect, size);
}

function isVerticallyInWindow(rect, size) {
  return (
    (rect.top <= size.height && rect.bottom >= 0) ||
    (rect.top <= 0 && rect.bottom >= 0)
  );
}

function isHorizontallyInWindow(rect, size) {
  return rect.left <= size.width;
}
