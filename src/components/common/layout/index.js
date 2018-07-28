import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './styles.scss';

const CommonLayout = ({ children }) => {
  return (
    <div id="page">
      <header>
        <div className="header-title">Movies</div>
      </header>
      <main>{children}</main>
    </div>
  );
};

CommonLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export const CommonRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <CommonLayout>
          <Component {...matchProps} />
        </CommonLayout>
      )}
    />
  );
};

CommonRoute.propTypes = {
  component: PropTypes.func.isRequired
};
