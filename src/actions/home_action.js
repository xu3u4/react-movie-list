import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';
import { updateUrlParams } from 'utils';

export const getMovies = (params) => ({
  [CALL_API]: {
    params,
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
  return {
    [CALL_API]: {
      params,
      endpoint: '/search/movie',
      method: 'GET',
      types: [actions.SEARCH_MOVIE_SUCCESS, actions.SEARCH_MOVIE_ERROR]
    }
  };
};

export const selectDropdown = (selected = {}) => (dispatch) => {
  dispatch({
    type: actions.SELECT_DROPDOWN,
    payload: selected,
  });
  updateUrlParams(selected);
  dispatch(getMovies(selected));
};
