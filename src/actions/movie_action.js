import { CALL_API } from 'middleware/api';
import * as actions from 'constants/actionTypes';

export const getMovie = (movieId) => ({
  [CALL_API]: {
    endpoint: `/movie/${movieId}?append_to_response=credits,images`,
    method: 'GET',
    types: [actions.GET_MOVIE_SUCCESS, actions.GET_MOVIE_ERROR]
  }
});
