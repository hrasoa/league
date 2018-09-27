// @flow
import React from 'react';
import Search from '../_Search/Search';
import Filters from '../_Filters/Filters';
import Listing from '../_Listing/Listing';

const Teams = () => (
  <div>
    <Search
      editorKey="team-search"
      placeholder="Enter a team name..."
      onChange={console.log}
    />
    <Filters>
      filters
    </Filters>
    <Listing items={[]}>
      {() => <span>item</span>}
    </Listing>
  </div>
);

export default Teams;
