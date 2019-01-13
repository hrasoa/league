// @flow
import React from 'react';
import LazyPicture from '../_LazyPicture';
import styles from './Cover.scss';
import picture from './Picture.scss';
import image from './mahkeo.jpg';

const Cover = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>
      “ Bring the virtual pro clubs to the next level ”
    </h1>
    <LazyPicture
      alt="https://unsplash.com/photos/_kBrDn-Oir0"
      styles={picture}
      image={{ preSrc: `${image}?w=100&q=20`, src: image }}
    />
  </div>
);

export default Cover;
