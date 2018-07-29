import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, withState, withHandlers, pure
} from 'recompose';
import Lightbox from 'react-images';

import { imgSrc } from 'utils';
import { backdropsType } from 'types';
import './styles.scss';

const PopupSlider = (props) => {
  const {
    images,
    closeSlider,
    currentImage,
    isOpen,
    handleClickPrev,
    handleClickNext
  } = props;
  const imagesSrc = images.map((image) => ({ src: imgSrc(image.file_path, 1280) }));

  return (
    <Lightbox
      currentImage={currentImage}
      isOpen={isOpen}
      images={imagesSrc}
      onClose={closeSlider}
      onClickPrev={handleClickPrev}
      onClickNext={handleClickNext}
      showImageCount={false}
    />
  );
};

PopupSlider.propTypes = {
  images: backdropsType.isRequired,
  closeSlider: PropTypes.func.isRequired,
  currentImage: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClickPrev: PropTypes.func.isRequired,
  handleClickNext: PropTypes.func.isRequired,
};

export default compose(
  withState('currentImage', 'changeImage', 0),
  withHandlers({
    handleClickPrev: ({ changeImage, currentImage }) => () => changeImage(currentImage - 1),
    handleClickNext: ({ changeImage, currentImage }) => () => changeImage(currentImage + 1),
  }),
  pure
)(PopupSlider);
