// @flow
import React from 'react';
import styles from './Cover.scss';

const Cover = () => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>“ Bring the virtual pro clubs to the next level ”</h1>
    <img src="https://images.unsplash.com/photo-1493038950213-29266628eb06?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be9efd9d3d5e666e2f852a8022364d3f&auto=format&fit=crop&w=1400&q=80" alt="cover" className={styles.img} />
  </div>
);

export default Cover;
