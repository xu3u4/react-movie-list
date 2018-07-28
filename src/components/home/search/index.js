import React from 'react';

import { orderBy, filterBy } from 'constants/dropdown_values';
import Dropdown from './dropdown';
import './styles.scss';

const Search = () => {
  return (
    <div className="browse">
      <div className="top-nav page-title flex">
        <h1>All Movies</h1>
        <input className="search-input" type="text" placeholder="Search for movies" />
      </div>
      <div className="top-nav flex">
        <Dropdown
          menuName="Order By"
          menuItems={orderBy}
          selected="A"
        />
        <Dropdown
          menuName="Filter By"
          menuItems={filterBy}
          selected="B"
        />
      </div>
    </div>
  );
};

export default Search;
