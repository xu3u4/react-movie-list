import React from 'react';

import { imgSrc } from 'utils';
import { backdropsType } from 'types';
import './styles.scss';

const Album = ({ images }) => {
  return (
    <figure className="movie-images">
      {
        images.map((image, i) => (
          <img
            alt="movie images"
            key={image.file_path}
            className={`images-${i}`}
            src={imgSrc(image.file_path, 500)}
          />
        ))
      }
    </figure>
  );
};

Album.propTypes = {
  images: backdropsType.isRequired
};

export default Album;
