import React from 'react';
import PropTypes from 'prop-types';

import './font-icon.scss';

const FontIcon = ({ iconName }) => (
  <span className={iconName} />
);

FontIcon.propTypes = {
  iconName: PropTypes.string.isRequired
};

export default FontIcon;
