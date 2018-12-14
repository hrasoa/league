// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import type { OperationComponent, GraphqlQueryControls } from 'react-apollo';
import PlayerCard from '../../_PlayerCards/Basic';
import withRouter from '../../_Router/withRouter';
import Select from '../../_Select';
import getPlayers from '../../query.players.graphql';
import type { UrlFormatter } from '../../_Router/type';
import styles from './Players.scss';

type Player = {
  id: string,
  name: string,
  image: string,
  pos: string,
  team: { logo: string },
};

type Result = {
  players: { edges: Array<{ node: Player }> },
};

type OwnProps = {
  url: UrlFormatter,
};

type Props = {
  data: GraphqlQueryControls<> & Result,
} & OwnProps;

const Players = ({ url, data }: Props) => {
  const { loading, players } = data;
  return (
    <Fragment>
      <div>
        <span>
          <label htmlFor="select-id">
            label
            <Select id="select-id">
              <option value="1">val 1</option>
              <option value="2">val 2</option>
            </Select>
          </label>
        </span>
      </div>
      {loading ? null : (
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
      )}
    </Fragment>
  );
};

const withData: OperationComponent<Result, OwnProps> = graphql(getPlayers);

export default withRouter(withData(Players));
