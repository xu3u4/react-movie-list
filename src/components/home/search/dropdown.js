import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withProps,
  withState,
} from 'recompose';

import { selectedOptionType, menuItemType } from 'types';
import './styles.scss';

const Dropdown = (props) => {
  const {
    menuTitle,
    menuItems,
    selected,
    selectedItem,
    toggleDropdown,
    showDropdown,
    selectDropdown,
  } = props;

  return (
    <div className="dropdown-wrapper">
      <span className="menu-name">{menuTitle.name}:</span>
      <div
        className={`dropdown ${showDropdown && 'onDropdown'}`}
        role="menuitem"
        onClick={() => toggleDropdown(!showDropdown)}
      >
        <span>{selectedItem.name}</span>
        { showDropdown && (
          <ul className="dropdown-list">
            {
              menuItems.map((menuItem) => (
                <li
                  key={`${menuTitle.field}-${menuItem.name}`}
                  onClick={
                    () => selectDropdown({ ...selected, [menuTitle.field]: menuItem.field })
                  }
                >
                  {menuItem.name}
                </li>
              ))
            }
          </ul>)
        }
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  menuTitle: PropTypes.shape({
    name: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
  }).isRequired,
  menuItems: PropTypes.arrayOf(
    menuItemType
  ).isRequired,
  selected: selectedOptionType.isRequired,
  selectedItem: menuItemType.isRequired,
  toggleDropdown: PropTypes.func.isRequired,
  showDropdown: PropTypes.bool.isRequired,
  selectDropdown: PropTypes.func.isRequired,
};

export default compose(
  withState('showDropdown', 'toggleDropdown', false),
  withProps(({ menuItems, selected, menuTitle }) => {
    const selectedItem = menuItems.find((menuItem) => menuItem.field === selected[menuTitle.field]);

    return { selectedItem };
  }),
  pure
)(Dropdown);
