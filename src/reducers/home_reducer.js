import * as actions from 'constants/actionTypes';
import {
  ORDER_BY_TITLE, FILTER_BY_TITLE, orderBy, filterBy
} from 'constants/dropdown_values';

export const initialState = {
  movies: [],
  genres: {},
  selected: {
    [ORDER_BY_TITLE.field]: orderBy[0].field,
    [FILTER_BY_TITLE.field]: filterBy[0].field
  },
};

export default function HomeReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.GET_MOVIES_REQUEST:
    case actions.SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        movies: []
      };
    case actions.GET_MOVIES_SUCCESS:
    case actions.SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        movies: payload.results
      };
    case actions.GET_GENRES_REQUEST:
      return {
        ...state,
        genres: {}
      };
    case actions.GET_GENRES_SUCCESS: {
      const genreMapping = payload.genres.reduce((result, genre) => {
        result[genre.id] = genre.name;
        return result;
      }, {});

      return {
        ...state,
        genres: genreMapping
      };
    }
    case actions.SELECT_DROPDOWN:
      return {
        ...state,
        selected: { ...action.payload }
      };
    default:
      return state;
  }
}
