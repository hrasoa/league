import React from 'react';
import styles from './Card.scss';
import image from './card.png';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.shadow}>
      <div className={styles.body}>
        <img alt="" className={styles.image} src={image} />
      </div>
    </div>
  </div>
);

export default Card;
