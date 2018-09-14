import React from 'react';
import Search from '../Search';
import Filters from './Filters';

const Players = () => (
  <div>
    <Search id="search-player" placeholder="Search for players..." />
    <Filters />
  </div>
);

export default Players;
