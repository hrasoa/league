// @flow
import React from 'react';
import LazyPicture from '../_LazyPicture';
import styles from './Cover.scss';
import coverImage from './mahkeo-245724-unsplash.preload.jpg';

const Cover = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>“ Bring the virtual pro clubs to the next level ”</h1>
    <LazyPicture
      alt="https://unsplash.com/photos/_kBrDn-Oir0"
      className={styles.image}
      preClassName={styles.image}
      image={coverImage}
    />
  </div>
);

export default Cover;
