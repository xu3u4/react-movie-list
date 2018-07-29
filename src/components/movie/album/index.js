import React from 'react';
import PropTypes from 'prop-types';
import {
  compose, withState, withHandlers, pure
} from 'recompose';

import { imgSrc } from 'utils';
import { backdropsType } from 'types';
import PopupSlider from './popup_slider';
import './styles.scss';

const Album = ({
  images, handleSliderOpen, handleSliderClose, showSlider
}) => {
  const overviewImages = images.slice(0, 5);

  return (
    <React.Fragment>
      <PopupSlider
        images={images}
        closeSlider={handleSliderClose}
        isOpen={showSlider}
      />
      <figure className="movie-images">
        {
          overviewImages.map((image, i) => (
            <div
              key={image.file_path}
              onClick={handleSliderOpen}
              role="button"
            >
              <img
                alt="movie images"
                className={`images-${i}`}
                src={imgSrc(image.file_path, 780)}
              />
            </div>
          ))
        }
      </figure>
    </React.Fragment>
  );
};

Album.propTypes = {
  images: backdropsType.isRequired,
  showSlider: PropTypes.bool.isRequired,
  handleSliderOpen: PropTypes.func.isRequired,
  handleSliderClose: PropTypes.func.isRequired,
};

export default compose(
  withState('showSlider', 'toggleSlider', false),
  withHandlers({
    handleSliderOpen: ({ toggleSlider }) => () => toggleSlider(true),
    handleSliderClose: ({ toggleSlider }) => () => toggleSlider(false),
  }),
  pure
)(Album);
