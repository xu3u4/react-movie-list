import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getMovies } from 'actions/home_action';
import Home from 'components/home';

export class HomeContainer extends PureComponent {
  static propTypes = {
    getMovies: PropTypes.func.isRequired
  }

  componentDidMount() {
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
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
