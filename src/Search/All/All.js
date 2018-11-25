/* eslint-disable react/prop-types */
// @@flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PlayerCard from '../../_PlayerCards/Basic';
import TeamCard from '../../_TeamCards/Basic';
import withRouter from '../../_Router/withRouter';
// import type { UrlFormatter, UrlSearch } from '../../_Router/type';
import Titles from './Titles';
import styles from './All.scss';

const GET_PLAYERS = gql`
  {
    players {
      id
      name
      image
      pos
      team {
        logo
      }
    }
  }
`;

const GET_TEAMS = gql`
  {
    teams {
      id
      name
      logo
    }
  }
`;

const All = ({ url, search }) => {
  const { q } = search;

  return (
    <Fragment>
      <Titles url={url('search_players', q ? { search: { q } } : null)}>
        Players
      </Titles>
      <Query query={GET_PLAYERS}>
        {({ loading, data }) => (loading ? null : (
          <div className={styles.carousel}>
            <ul className={styles.list}>
              {data && data.players.map(player => (
                <li key={`player-${player.id}`}>
                  <Link
                    className={styles.item}
                    to={url('player', { params: { id: player.id } })}
                  >
                    <PlayerCard {...player} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Query>
      <Titles url={url('search_teams', q ? { search: { q } } : null)}>
        Teams
      </Titles>
      <Query query={GET_TEAMS}>
        {({ loading, data }) => (loading ? null : (
          <div className={styles.carousel}>
            <ul className={styles.list}>
              {data && data.teams.map(team => (
                <li key={`team-${team.id}`}>
                  <Link
                    className={styles.item}
                    to={url('team', { params: { id: team.id } })}
                  >
                    <TeamCard {...team} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Query>
    </Fragment>
  );
};

export default withRouter(All);
