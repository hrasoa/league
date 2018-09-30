// @flow
import React, { Fragment } from 'react';
import Card from '../Player/Card/Card';
import Search from '../_Search/Search';
import Listing from '../_Listing/Listing';
import styles from './Players.scss';

const items = [];
for (let i = 0; i < 9; i += 1) {
  items.push({ id: `item-${i}` });
}

const Players = () => (
  <Fragment>
    <Search
      editorKey="player-search"
      placeholder="Enter a player name..."
      onChange={console.log}
    />
    <Listing items={items}>
      {item => (
        <a className={styles.link} href="/">
          <Card {...item} />
        </a>
      )}
    </Listing>
  </Fragment>
);

export default Players;
