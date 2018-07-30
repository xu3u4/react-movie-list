import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';

export const getMovie = (movieId) => ({
  [CALL_API]: {
    params: { append_to_response: 'credits,images' },
    endpoint: `/movie/${movieId}`,
    method: 'GET',
    types: [actions.GET_MOVIE_SUCCESS, actions.GET_MOVIE_ERROR]
  }
});
