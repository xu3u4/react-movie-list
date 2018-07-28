import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';

export const getMovies = () => ({
  [CALL_API]: {
    endpoint: '/discover/movie',
    method: 'GET',
    types: [actions.GET_MOVIES_SUCCESS, actions.GET_MOVIES_ERROR]
  }
});

export const getGenres = () => ({
  [CALL_API]: {
    endpoint: '/genre/movie/list',
    method: 'GET',
    types: [actions.GET_GRERES_SUCCESS, actions.GET_GRERES_ERROR]
  }
});
