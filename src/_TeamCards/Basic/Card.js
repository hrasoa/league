// @flow
import React from 'react';
import LazyPicture from '../../_LazyPicture';
import styles from './Card.scss';
import logo from './team.png';

const Card = () => (
  <div className={styles.root}>
    <div className={styles.image}>
      <LazyPicture
        alt="team"
        image={{ preSrc: logo, src: logo }}
      />
    </div>
    <div className={styles.bio}>
      team name
    </div>
  </div>
);

export default Card;
