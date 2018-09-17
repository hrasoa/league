import React from 'react';
import image from './card.png';
import styles from './Card.scss';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.thumbnail}>
      <span className={styles.pos}>cb</span>
      <img alt="" className={styles.image} src={image} />
    </div>
    <div className={styles.profile}>
      <span className={styles.name}>aiirmad</span>
    </div>
  </div>
);

export default Card;
