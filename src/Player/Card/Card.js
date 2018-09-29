import React from 'react';
import LazyPicture from '../../_LazyPicture/Picture';
import classname from '../../classname';
import styles from './Card.scss';
import image from './card.png';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.shadow}>
      <div className={styles.body}>
        <LazyPicture
          alt="player"
          className={styles.image}
          preClassName={classname(styles.image, styles.pre)}
          src={image.src}
          preSrc={image.preSrc}
        />
      </div>
    </div>
  </div>
);

export default Card;
