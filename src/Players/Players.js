import React from 'react';
import Search from '../Search';
import Filters from '../Filters';
import Listing from '../Listing';

const Players = () => (
  <div>
    <Search id="search-player" placeholder="Enter a player name..." />
    <Filters>
      filters
    </Filters>
    <Listing>
      list
    </Listing>
  </div>
);

export default Players;
