import React from 'react';
import { IoIosPerson } from 'react-icons/io';
import styles from './User.scss';

const User = () => (
  <span className={styles.root}>
    <span className={styles.icon}>
      <IoIosPerson className={styles.picto} />
    </span>
  </span>
);

export default User;
