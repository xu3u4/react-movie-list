import {
  shape, string, number, arrayOf, objectOf
} from 'prop-types';

export const movieType = shape({
  id: number.isRequired,
  poster_path: string,
  title: string.isRequired,
  vote_average: number.isRequired,
});

export const genresObjType = objectOf(string);

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

export const selectedOptionType = shape({
  sort_by: string,
  with_genres: string,
});

export const menuItemType = shape({
  name: string.isRequired,
  field: string.isRequired,
});
