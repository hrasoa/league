import React from 'react';
import styles from './Card.scss';
import image from './card.png';
import team from './team.png';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        <div className={styles.outerShadow}>
          <div className={styles.outerShape}>
            <div className={styles.innerShape}>
              <span className={styles.team}>
                <img alt="" src={team} />
              </span>
              <img alt="" src={image} />
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          <span className={styles.name}>aiirmad</span>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
