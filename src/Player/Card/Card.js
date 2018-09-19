import React from 'react';
import styles from './Card.scss';
import classname from '../../classname';
import team from './team.png';

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
          <img alt="" src="https://pbs.twimg.com/profile_images/976109234906640384/YQJK5Ilz_400x400.jpg" />
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
