import React from 'react';
import Search from '../Search';
import Filters from '../Filters';
import Listing from '../Listing';

const Teams = () => (
  <div>
    <Search id="search-player" placeholder="Search for teams..." />
    <Filters>
      filters
    </Filters>
    <Listing>
      list
    </Listing>
  </div>
);

export default Teams;
