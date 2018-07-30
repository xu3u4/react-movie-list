import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withState
} from 'recompose';

import './styles.scss';

const Dropdown = (props) => {
  const {
    menuName,
    menuItems,
    selected,
    toggleDropdown,
    showDropdown
  } = props;

  return (
    <div className="dropdown-wrapper">
      <span className="menu-name">{menuName}:</span>
      <div
        className={`dropdown ${showDropdown && 'onDropdown'}`}
        role="menuitem"
        onClick={() => toggleDropdown(!showDropdown)}
      >
        <span>{selected}</span>
        { showDropdown
          && (
          <ul className="dropdown-list">
            {
              menuItems.map((menuItem) => (
                <li key={`${menuName}-${menuItem.name}`}>{menuItem.name}</li>
              ))
            }
          </ul>
          )
        }
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  menuName: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  selected: PropTypes.string.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool.isRequired
};

export default compose(
  withState('showDropdown', 'toggleDropdown', false),
  pure
)(Dropdown);
