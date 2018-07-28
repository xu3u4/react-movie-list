import {
  shape, string, number
} from 'prop-types';

export const movieType = shape({
  id: number.isRequired,
  poster_path: string.isRequired,
  title: string.isRequired,
  vote_average: number.isRequired,
});
