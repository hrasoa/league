// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../../_PlayerCards/Basic';
import TeamCard from '../../_TeamCards/Basic';
import withRouter from '../../_Router/withRouter';
import type { UrlFormatter, UrlSearch } from '../../_Router/type';
import Titles from './Titles';
import styles from './All.scss';

const items = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '4' },
  { id: '5' },
];

const All = ({ url, search }: { url: UrlFormatter, search: UrlSearch }) => {
  const { q } = search;
  return (
    <Fragment>
      <Titles url={url('search_players', q ? { search: { q } } : null)}>
        Players
      </Titles>
      <div className={styles.carousel}>
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
      </div>
      <Titles url={url('search_teams', q ? { search: { q } } : null)}>
        Teams
      </Titles>
      <div className={styles.carousel}>
        <ul className={styles.list}>
          {items.map(item => (
            <li key={`team-${item.id}`}>
              <Link
                className={styles.item}
                to={url('team', { params: { id: item.id } })}
              >
                <TeamCard />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default withRouter(All);
