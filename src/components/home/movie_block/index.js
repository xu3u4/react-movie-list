import React from 'react';
import { Link } from 'react-router-dom';

import { movieType } from 'types';
import { imgSrc } from 'utils';

import './styles.scss';

const MovieBlock = ({ movie }) => {
  const movieGenres = movie.genre_ids.join(', ');

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="movie-block">
        <img
          src={imgSrc(movie.poster_path, 342)}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="vote">
          <b>{movie.vote_average}</b>
        </div>
        <h2>{movie.title}</h2>
        <span>{movieGenres}</span>
      </div>
    </Link>
  );
};

MovieBlock.propTypes = {
  movie: movieType.isRequired
};

export default MovieBlock;
