import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  withHandlers,
} from 'recompose';

import { movieType, genresObjType, selectedOptionType } from 'types';
import Loading from 'components/common/loading';
import Pagination from 'components/common/pagination';
import Browse from './search';
import MovieBlock from './movie_block';
import './styles.scss';

const Home = (props) => {
  const {
    movies,
    searchMovie,
    genres,
    selectDropdown,
    selected,
    totalPage,
    handlePageChange,
  } = props;

  return (
    <React.Fragment>
      <Browse
        searchMovie={searchMovie}
        selectDropdown={selectDropdown}
        selected={selected}
      />
      {
        movies.length === 0 ? (
          <Loading />
        ) : (
          <section className="movie-list">
            {movies.map((movie) => (
              <MovieBlock
                movie={movie}
                genres={genres}
                key={`movie-${movie.id}`}
              />
            ))}
          </section>
        )
      }
      {
        totalPage > 0 && (
          <Pagination
            totalPage={totalPage}
            onPageChange={handlePageChange}
          />
        )
      }
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
  totalPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
};

export default compose(
  withHandlers({
    handlePageChange: ({ getMovies, selected }) => (pageNumber) => {
      window.scrollTo(0, 0);

      getMovies({ ...selected, page: pageNumber });
    }
  }),
  pure
)(Home);
