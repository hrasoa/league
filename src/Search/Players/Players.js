// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../../_PlayerCards/Basic';
import withRouter from '../../_Router/withRouter';
import type { UrlFormatter } from '../../_Router/type';
import styles from './Players.scss';

const items = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
  { id: '6' },
  { id: '7' },
  { id: '8' },
  { id: '9' },
];

const Players = ({ url }: { url: UrlFormatter }) => (
  <ul className={styles.list}>
    {items.map(item => (
      <li key={`player-${item.id}`}>
        <Link
          className={styles.item}
          to={url('player', { params: { id: item.id } })}
        >
          <PlayerCard />
        </Link>
      </li>
    ))}
  </ul>
);

export default withRouter(Players);
