// @flow
import React from 'react';
import Search from '../Search';
import Filters from '../Filters';
import Listing from '../Listing';

const Teams = () => (
  <div>
    <Search
      editorKey="team-search"
      placeholder="Enter a team name..."
    />
    <Filters>
      filters
    </Filters>
    <Listing items={[]}>
      list
    </Listing>
  </div>
);

export default Teams;
