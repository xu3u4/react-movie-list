import React from 'react';
import PropTypes from 'prop-types';
import {
  pure,
  compose,
  setPropTypes,
  withHandlers,
  withState,
  lifecycle,
  branch,
  renderNothing,
} from 'recompose';

import { updateUrlParams, queryStringToParams } from 'utils';
import PageList from './pageList';

import './styles.scss';

export const PaginationCore = ({
  totalPage,
  handleChangePage,
  currentPage
}) => (
  <PageList
    totalPage={totalPage}
    handleChangePage={handleChangePage}
    currentPage={currentPage}
  />
);

PaginationCore.propTypes = {
  totalPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
};

export default compose(
  setPropTypes({
    totalPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func,
  }),
  withState('currentPage', 'setCurrentPage',
    parseInt(queryStringToParams(window.location.search).page, 10) || 1),
  withHandlers({
    handleChangePage: (props) => (page) => () => {
      const { onPageChange, setCurrentPage } = props;
      const validPage = page > 0 ? page : 1;

      updateUrlParams({ page: validPage });

      if (onPageChange) onPageChange(validPage);
      setCurrentPage(validPage);
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        currentPage,
        totalPage,
        handleChangePage,
      } = this.props;

      if (currentPage > totalPage) {
        handleChangePage(totalPage)();
      }
    },
    componentWillReceiveProps(nextProps) {
      if (this.props.totalPage !== nextProps.totalPage) {
        updateUrlParams({ page: 1 });
        this.props.setCurrentPage(1);
      }
    }
  }),
  branch(
    ({ totalPage }) => totalPage === 0,
    renderNothing
  ),
  pure
)(PaginationCore);
