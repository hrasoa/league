// @flow
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PlayerCard from '../../_PlayerCards/Basic';
import withRouter from '../../_Router/withRouter';
import Select from '../../_Select';
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
  </Fragment>
);

export default withRouter(Players);
