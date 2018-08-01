import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';

export const getMovie = (movieId) => ({
  [CALL_API]: {
    params: { append_to_response: 'credits,images' },
    endpoint: `/movie/${movieId}`,
    method: 'GET',
    types: [
      actions.GET_MOVIE_REQUEST,
      {
        type: actions.GET_MOVIE_SUCCESS,
        payload: (action, state, res) => {
          return res.json().then(json => {
            return json;
          });
        }
      },
      actions.GET_MOVIE_ERROR
    ]
  }
});
