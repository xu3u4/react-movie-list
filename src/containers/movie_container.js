import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovie } from 'actions/movie_action';
import Movie from 'components/movie';

export class MovieContainer extends PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ movieId: PropTypes.string.isRequired })
    }).isRequired,
    getMovie: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.props.getMovie(movieId);
  }

  render() {
    return (
      <Movie {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (state.MovieReducer);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMovie
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
