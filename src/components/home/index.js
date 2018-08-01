import React from 'react';
import PropTypes from 'prop-types';

import { movieType, genresObjType, selectedOptionType } from 'types';
import Browse from './search';
import MovieBlock from './movie_block';
import './styles.scss';

const Home = (props) => {
  const {
    movies,
    searchMovie,
    genres,
    selectDropdown,
    selected
  } = props;

  if (movies.length === 0) return null;

  return (
    <React.Fragment>
      <Browse
        searchMovie={searchMovie}
        selectDropdown={selectDropdown}
        selected={selected}
      />
      <section className="movie-list">
        {movies.map((movie) => (
          <MovieBlock
            movie={movie}
            genres={genres}
            key={`movie-${movie.id}`}
          />
        ))}
      </section>
    </React.Fragment>
  );
};

Home.defaultProps = {
  movies: [],
  genres: {}
};

Home.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  genres: genresObjType,
  searchMovie: PropTypes.func.isRequired,
  selectDropdown: PropTypes.func.isRequired,
  selected: selectedOptionType.isRequired,
};

export default Home;
