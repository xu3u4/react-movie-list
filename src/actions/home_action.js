import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';
import { updateUrlParams } from 'utils';

export const getMovies = (params) => ({
  [CALL_API]: {
    params,
    endpoint: '/discover/movie',
    method: 'GET',
    types: [
      actions.GET_MOVIES_REQUEST,
      {
        type: actions.GET_MOVIES_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_MOVIES_ERROR
    ]
  }
});

export const getGenres = () => ({
  [CALL_API]: {
    endpoint: '/genre/movie/list',
    method: 'GET',
    types: [
      actions.GET_GENRES_REQUEST,
      {
        type: actions.GET_GENRES_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_GENRES_ERROR
    ]
  }
});

export const searchMovie = (params) => {
  return {
    [CALL_API]: {
      params,
      endpoint: '/search/movie',
      method: 'GET',
      types: [
        actions.SEARCH_MOVIE_REQUEST,
        {
          type: actions.SEARCH_MOVIE_SUCCESS,
          payload: (action, state, res) => {
            return res.json().then(json => {
              return json;
            });
          }
        },
        actions.SEARCH_MOVIE_ERROR
      ]
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
