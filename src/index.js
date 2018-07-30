import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import api from 'middleware/api';
import RootReducer from 'reducers';
import { CommonRoute } from 'components/common/layout';
import Home from 'containers/home_container';
import Movie from 'containers/movie_container';
import 'assets/styles/style.scss';

const stores = createStore(RootReducer, applyMiddleware(ReduxThunk, api));

ReactDOM.render(
  <Provider store={stores}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <CommonRoute path="/home" component={Home} />
        <CommonRoute path="/movie/:movieId" component={Movie} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);
