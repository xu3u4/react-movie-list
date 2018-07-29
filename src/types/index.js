import {
  shape, string, number, arrayOf
} from 'prop-types';

export const movieType = shape({
  id: number.isRequired,
  poster_path: string.isRequired,
  title: string.isRequired,
  vote_average: number.isRequired,
});

export const genresType = arrayOf(
  shape({
    id: number.isRequired,
    name: string.isRequired,
  })
);

export const backdropsType = arrayOf(
  shape({
    file_path: string.isRequired,
  })
);

export const actorType = shape({
  id: number.isRequired,
  name: string.isRequired,
  character: string.isRequired,
  profile_path: string,
});

export const movieDetailsType = shape({
  images: shape({
    backdrops: backdropsType
  }),
  title: string,
  genres: genresType,
  overview: string,
  credits: shape({
    cast: arrayOf(actorType)
  }),
  vote_average: number,
  release_date: string,
  runtime: number,
});
