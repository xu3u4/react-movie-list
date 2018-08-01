import * as actions from 'constants/actionTypes';

export const initialState = {
  movieDetails: {}
};

export default function MovieReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_MOVIE_REQUEST:
      return {
        movieDetails: {}
      };
    case actions.GET_MOVIE_SUCCESS:
      return {
        movieDetails: payload
      };
    default:
      return state;
  }
}
