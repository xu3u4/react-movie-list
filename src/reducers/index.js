import { combineReducers } from 'redux';
import HomeReducer from './home_reducer';
import MovieReducer from './movie_reducer';

const rootReducer = combineReducers({
  HomeReducer,
  MovieReducer
});

export default rootReducer;
