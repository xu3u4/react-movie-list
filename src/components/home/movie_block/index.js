import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import { movieType, genresObjType } from 'types';
import { imgSrc } from 'utils';

import './styles.scss';

const MovieBlock = ({ movie, genres }) => {
  const movieGenres = movie.genre_ids.map((genreId) => (
    genres[genreId]
  ));

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-block">
        <div className="flex movie-poster">
          <LazyLoad height={300}>
            <img
              src={imgSrc(movie.poster_path, 342, 'poster')}
              alt={movie.title}
              key={movie.poster_path}
            />
          </LazyLoad>
        </div>
        <div className="vote">
          <b>{movie.vote_average}</b>
        </div>
        <h2>{movie.title}</h2>
        <span>{movieGenres.join(', ')}</span>
      </div>
    </Link>
  );
};

MovieBlock.propTypes = {
  movie: movieType.isRequired,
  genres: genresObjType.isRequired,
};

export default MovieBlock;
