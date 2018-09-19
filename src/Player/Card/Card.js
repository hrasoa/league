import React from 'react';
import styles from './Card.scss';
import classname from '../../classname';
import team from './team.png';
import image from './card.png';
import crowd from './crowd.jpeg';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.topShadow}>
      <div className={classname(styles.top, styles.topBorderShape)}>
        <div className={styles.topShape}>
          <div />
        </div>
      </div>
    </div>
    <div className={styles.inner}>
      <img alt="" className={styles.team} src={team} />
      <div className={styles.imageShadow}>
        <div className={styles.imageShape}>
          <div className={styles.imageContainer}>
            <img alt="" className={styles.imageBg} src={crowd} />
            <img alt="" className={styles.image} src={image} />
          </div>
        </div>
      </div>
    </div>
    <div className={styles.bottomShadow}>
      <div className={styles.bottomBorderShape}>
        <div className={styles.bottomShape}>
          <div />
        </div>
      </div>
    </div>
  </div>
);

export default Card;
