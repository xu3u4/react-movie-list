import React from 'react';
import PropTypes from 'prop-types';

import { numberRange } from 'utils';
import Page from './page';

export const createPageArray = (currentPage, totalPage) => {
  const totalPaginate = 5;
  const pageRange = 2;
  let shift = 0;

  // render all if less than 5 pages
  if (totalPage <= totalPaginate) return numberRange(1, totalPage);
  // currentPage +- 2
  const pageArray = numberRange(currentPage - pageRange, currentPage + pageRange);

  if (pageArray[0] <= 0) shift = 1 - pageArray[0];
  else if (pageArray[totalPaginate - 1] > totalPage) {
    shift = totalPage - pageArray[totalPaginate - 1];
  }

  return pageArray.map((page) => page + shift);
};

const PageList = (props) => {
  const { totalPage, handleChangePage, currentPage } = props;
  const pageArray = createPageArray(currentPage, totalPage);

  return (
    <div className="pagination-wrapper">
      <div className="paginate-bar">
        {
          currentPage !== 1 && (
          <Page
            pageClass="icon-double-left arrow-button"
            handleChangePage={handleChangePage}
            targetPage={1}
          />)
        }
        {
          currentPage !== 1 && (
          <Page
            pageClass="icon-left-dir arrow-button"
            handleChangePage={handleChangePage}
            targetPage={currentPage - 1}
          />
          )
        }
        {
          pageArray.map((page) => (
            <Page
              key={`paginate_${page}`}
              pageClass="paginate-button"
              isActive={currentPage === page}
              content={page}
              handleChangePage={handleChangePage}
              targetPage={page}
            />
          ))
        }
        {
          currentPage !== totalPage && (
          <Page
            pageClass="icon-right-dir arrow-button"
            handleChangePage={handleChangePage}
            targetPage={currentPage + 1}
          />
          )
        }
        {
          currentPage !== totalPage && (
          <Page
            pageClass="icon-double-right arrow-button"
            handleChangePage={handleChangePage}
            targetPage={totalPage}
          />)
        }
      </div>
    </div>
  );
};

PageList.propTypes = {
  totalPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default PageList;
