import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import { movieDetailsType } from 'types';
import './circular-bar.scss';
import './styles.scss';

const detailList = (title, content) => {
  const contentText = Array.isArray(content) ? content.join(', ') : content;

  return (
    <div className="flex">
      <div className="bold-white-text list-title">{title}</div>
      <div className="list-content">{contentText}</div>
    </div>
  );
};

const MovieDetails = ({ movieDetails }) => (
  <div className="flex movie-details">
    <div className="movie-rating">
      <CircularProgressbar
        percentage={movieDetails.vote_average * 10}
        text={movieDetails.vote_average}
        strokeWidth={10}
      />
    </div>
    <div className="flex detail-list">
      {detailList('Genre', movieDetails.genres.map((genre) => genre.name))}
      {detailList('Release Date', movieDetails.release_date)}
      {detailList('Duration', `${movieDetails.runtime} min`)}
    </div>
  </div>
);

MovieDetails.propTypes = {
  movieDetails: movieDetailsType.isRequired
};

export default MovieDetails;
