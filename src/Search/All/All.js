// @flow
import React, { Fragment } from 'react';
import PlayerCard from '../../_PlayerCards/Basic';
import TeamCard from '../../_TeamCards/Basic';
import Titles from './Titles';
import styles from './All.scss';

const items = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
];

const All = () => (
  <Fragment>
    <Titles url="/">
      Players
    </Titles>
    <div className={styles.carousel}>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={`player-${item.id}`}>
            <a className={styles.item} href="/">
              <PlayerCard />
            </a>
          </li>
        ))}
      </ul>
    </div>
    <Titles url="/">
      Teams
    </Titles>
    <div className={styles.carousel}>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={`team-${item.id}`}>
            <a className={styles.item} href="/">
              <TeamCard />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </Fragment>
);

export default All;
