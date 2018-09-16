import React, { Fragment } from 'react';
import Search from '../Search';
import Filters from '../Filters';
import Listing from '../Listing';

const Players = () => (
  <Fragment>
    <Search
      editorKey="player-search"
      placeholder="Enter a player name..."
      onChange={console.log}
    />
    <Filters>
      Filter by
    </Filters>
    <Listing>
      list
    </Listing>
  </Fragment>
);

export default Players;
