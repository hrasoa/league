// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import type { OperationComponent, GraphqlQueryControls } from 'react-apollo';
import PlayerCard from '../../_PlayerCards/Basic';
import withRouter from '../../_Router/withRouter';
import type { UrlFormatter, UrlSearch } from '../../_Router/type';
import getPlayers from '../../query.players.graphql';
import Titles from './Titles';
import styles from './All.scss';

type Player = {
  id: string,
};

type Result = {
  players: { edges: Array<{ node: Player }> },
};

type OwnProps = {
  url: UrlFormatter,
  search: UrlSearch,
};

type Props = {
  data: GraphqlQueryControls<> & Result,
} & OwnProps;

const Players = ({ url, search, data }: Props) => {
  const { q } = search;
  const { loading, players } = data;

  return (
    <Fragment>
      <Titles url={url('search_players', q ? { search: { q } } : null)}>
        Players
      </Titles>
      {loading ? null : (
        <div className={styles.carousel}>
          <ul className={styles.list}>
            {players &&
              players.edges.map(edge => (
                <li key={`player-${edge.node.id}`}>
                  <Link
                    className={styles.item}
                    to={url('player', { params: { id: edge.node.id } })}
                  >
                    <PlayerCard {...edge.node} />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

const withData: OperationComponent<Result, OwnProps> = graphql(getPlayers, {
  options: () => ({
    variables: {
      first: 5,
    },
  }),
});

export default withRouter(withData(Players));
