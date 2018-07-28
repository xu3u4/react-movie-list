import React from 'react';
import PropTypes from 'prop-types';

import { movieType } from 'types';
import Search from './search';
import MovieBlock from './movie_block';
import './styles.scss';

const Home = (props) => {
  const { movies } = props;

  if (movies.length === 0) return null;

  return (
    <React.Fragment>
      <Search />
      <section className="movie-list">
        {movies.map((movie) => <MovieBlock movie={movie} key={`movie-${movie.id}`} />)}
      </section>
    </React.Fragment>
  );
};

Home.defaultProps = {
  movies: []
};

Home.propTypes = {
  movies: PropTypes.arrayOf(movieType)
};

export default Home;
