import * as actions from 'constants/actionTypes';

export const initialState = {
  movies: [],
  genres: []
};

export default function HomeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_MOVIES_SUCCESS:
    case actions.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: payload.results
      };
    case actions.GET_GENRES_SUCCESS:
      return {
        ...state,
        genres: payload.genres
      };
    default:
      return state;
  }
}
