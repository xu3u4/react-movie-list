import * as actions from 'constants/actionTypes';
import {
  ORDER_BY_TITLE, FILTER_BY_TITLE, orderBy, filterBy
} from 'constants/dropdown_values';
import { queryStringToParams } from 'utils';

const { sort_by, with_genres } = { // eslint-disable-line camelcase
  ...queryStringToParams(window.location.search)
};

export const initialState = {
  movies: [],
  genres: {},
  totalPage: 0,
  selected: {
    [ORDER_BY_TITLE.field]: sort_by || orderBy[0].field, // eslint-disable-line camelcase
    [FILTER_BY_TITLE.field]: with_genres || filterBy[0].field // eslint-disable-line camelcase
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
        movies: payload.results,
        totalPage: payload.total_pages,
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
