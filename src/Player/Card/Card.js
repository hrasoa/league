import React from 'react';
import styles from './Card.scss';
import image from './card.png';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.outerShadow}>
        <div className={styles.outerShape}>
          <div>
            <div className={styles.innerShape}>
              <img alt="" src={image} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bio}>
        <span className={styles.name}>aiirmad</span>
      </div>
    </div>
  </div>
);

export default Card;
