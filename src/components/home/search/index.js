import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withState,
  withHandlers,
} from 'recompose';

import {
  ORDER_BY_TITLE, FILTER_BY_TITLE, orderBy, filterBy
} from 'constants/dropdown_values';
import FontIcon from 'components/common/font-icon';
import { selectedOptionType } from 'types';
import Dropdown from './dropdown';
import './styles.scss';

export const Search = ({
  onInput, onSearch, selectDropdown, selected
}) => {
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
          menuTitle={ORDER_BY_TITLE}
          menuItems={orderBy}
          selectDropdown={selectDropdown}
          selected={selected}
        />
        <Dropdown
          menuTitle={FILTER_BY_TITLE}
          menuItems={filterBy}
          selectDropdown={selectDropdown}
          selected={selected}
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  onInput: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  selectDropdown: PropTypes.func.isRequired,
  selected: selectedOptionType.isRequired,
};

export default compose(
  withState('keyword', 'updateKeyword', false),
  withHandlers({
    onInput: ({ updateKeyword }) => (e) => updateKeyword(e.target.value),
    onSearch: ({ searchMovie, keyword }) => () => searchMovie({ query: keyword }),
  }),
  pure
)(Search);
