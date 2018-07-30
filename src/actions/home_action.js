import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';
import { paramsToQueryString } from 'utils';

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
    types: [actions.GET_GENRES_SUCCESS, actions.GET_GENRES_ERROR]
  }
});

export const searchMovie = (params) => {
  const query = paramsToQueryString(params);

  return {
    [CALL_API]: {
      endpoint: `/search/movie${query}`,
      method: 'GET',
      types: [actions.SEARCH_MOVIE_SUCCESS, actions.SEARCH_MOVIE_ERROR]
    }
  };
};
