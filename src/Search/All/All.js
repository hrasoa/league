// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import TeamCard from '../../_TeamCards/Basic';
import withRouter from '../../_Router/withRouter';
import type { UrlFormatter, UrlSearch } from '../../_Router/type';
import Players from './Players';
import Titles from './Titles';
import styles from './All.scss';

const GET_TEAMS = gql`
  {
    teams {
      id
      name
      logo
    }
  }
`;

const All = ({ url, search }: { url: UrlFormatter, search: UrlSearch }) => {
  const { q } = search;

  return (
    <Fragment>
      <Players />
      <Titles url={url('search_teams', q ? { search: { q } } : null)}>
        Teams
      </Titles>
      <Query query={GET_TEAMS}>
        {({ loading, data }) =>
          loading ? null : (
            <div className={styles.carousel}>
              <ul className={styles.list}>
                {data &&
                  data.teams.map(team => (
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
          )
        }
      </Query>
    </Fragment>
  );
};

export default withRouter(All);
