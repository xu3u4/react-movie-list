import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import api from 'middleware/api';
import 'styles/style.scss';
import RootReducer from 'reducers';
import { CommonRoute } from 'components/common/layout';
import Home from 'containers/home_container';

const stores = createStore(RootReducer, applyMiddleware(ReduxThunk, api));

ReactDOM.render(
  <Provider store={stores}>
    <BrowserRouter>
      <Switch>
        <CommonRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
