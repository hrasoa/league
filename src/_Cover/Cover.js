import React from 'react';
import styles from './Cover.scss';
import image from './mahkeo-245724-unsplash.jpg';

const Cover = () => (
  <div className={styles.root}>
    <h1 className={styles.title}>“ Bring the virtual pro clubs to the next level ”</h1>
    <img
      alt="https://unsplash.com/photos/_kBrDn-Oir0"
      className={styles.image}
      src={image.preSrc}
      data-src={image.src}
    />
  </div>
);

export default Cover;
