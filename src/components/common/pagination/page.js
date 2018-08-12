import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames'

const Page = (props) => {
  const {
    isActive,
    content,
    handleChangePage,
    targetPage,
    pageClass
  } = props;

  // const buttonClass = classnames(pageClass,
  //   {
  //     'is-active': isActive
  //   }
  // )

  return (
    <button
      type="button"
      className={`${pageClass} ${isActive && 'is-active'}`}
      disabled={isActive}
      onClick={handleChangePage(targetPage)}
    >
      {content}
    </button>
  );
};

Page.propTypes = {
  isActive: PropTypes.bool,
  content: PropTypes.number,
  handleChangePage: PropTypes.func.isRequired,
  targetPage: PropTypes.number.isRequired,
  pageClass: PropTypes.string
};

Page.defaultProps = {
  content: undefined,
  isActive: false,
  pageClass: ''
};

export default Page;
