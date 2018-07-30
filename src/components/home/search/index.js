import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withState,
  withHandlers,
} from 'recompose';

import { orderBy, filterBy } from 'constants/dropdown_values';
import FontIcon from 'components/common/font-icon';
import Dropdown from './dropdown';
import './styles.scss';

export const Search = ({ onInput, onSearch }) => {
  return (
    <div className="browse">
      <div className="top-nav page-title flex">
        <h1>All Movies</h1>
        <div className="search-bar">
          <button type="button" onClick={onSearch}>
            <FontIcon iconName="icon-search" />
          </button>
          <input
            className="search-input"
            type="text"
            placeholder="Search for movies"
            onChange={onInput}
          />
        </div>
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

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default compose(
  withState('keyword', 'updateKeyword', false),
  withHandlers({
    onInput: ({ updateKeyword }) => (e) => updateKeyword(e.target.value),
    onSearch: ({ searchMovie, keyword }) => () => searchMovie({ query: keyword }),
  }),
  pure
)(Search);
