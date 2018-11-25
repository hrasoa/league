// @flow
import React from 'react';
import LazyPicture from '../../_LazyPicture';
import styles from './Card.scss';

type Props = {
  name: string,
  logo: string,
};

const Card = ({ name, logo }: Props) => (
  <div className={styles.root}>
    <div className={styles.image}>
      <LazyPicture
        alt="team"
        image={{ preSrc: logo, src: logo }}
      />
    </div>
    <div className={styles.bio}>
      {name}
    </div>
  </div>
);

export default Card;
