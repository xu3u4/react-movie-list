import React from 'react';
import { Link } from 'react-router-dom';

import { movieDetailsType } from 'types';
import { isEmptyObj } from 'utils';
import IconText from 'components/common/icon-text';
import Album from './album';
import MovieDetails from './movie_details';
import CastList from './cast_list';
import './styles.scss';

const Movie = ({ movieDetails }) => {
  if (isEmptyObj(movieDetails)) return null;

  return (
    <div className="flex movie-page">
      <Album images={movieDetails.images.backdrops.slice(0, 5)} />
      <section className="movie-info">
        <Link to="/home" className="go-back">
          <IconText icon="icon-left-arrow" text="Back to list" />
        </Link>
        <h1>{movieDetails.title}</h1>
        <article>{movieDetails.overview}</article>
        <MovieDetails movieDetails={movieDetails} />
        <CastList cast={movieDetails.credits.cast.slice(0, 3)} />
      </section>
    </div>
  );
};

Movie.defaultProps = {
  movieDetails: {
    images: {},
    title: '',
    genres: [],
    overview: '',
    credits: {},
    vote_average: 0,
    release_date: '',
    runtime: 0,
  }
};

Movie.propTypes = {
  movieDetails: movieDetailsType
};

export default Movie;