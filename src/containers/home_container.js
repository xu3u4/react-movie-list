import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isEmptyObj } from 'utils';
import { genresObjType } from 'types';
import { getMovies, getGenres, searchMovie } from 'actions/home_action';
import Home from 'components/home';

export class HomeContainer extends PureComponent {
  static propTypes = {
    genres: genresObjType.isRequired,
    getMovies: PropTypes.func.isRequired,
    getGenres: PropTypes.func.isRequired,
  }

  componentDidMount() {
    if (isEmptyObj(this.props.genres)) this.props.getGenres();
    this.props.getMovies();
  }

  render() {
    return (
      <Home {...this.props} />
    );
  }
}

const mapStateToProps = (state) => (
  state.HomeReducer
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    getMovies,
    getGenres,
    searchMovie,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
