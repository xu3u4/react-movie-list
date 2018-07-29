import React from 'react';
import PropTypes from 'prop-types';

import FontIcon from 'components/common/font-icon';

import './styles.scss';

const IconText = ({ icon, text }) => {
  return (
    <div className="flex icon-label">
      <FontIcon iconName={icon} />
      {text && <span className="label-text">{text}</span>}
    </div>
  );
};

IconText.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default IconText;
