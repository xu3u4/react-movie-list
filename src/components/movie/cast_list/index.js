import React from 'react';
import PropTypes from 'prop-types';

import { actorType } from 'types';
import { imgSrc } from 'utils';
import './styles.scss';

const actorRow = (actor) => (
  <div key={actor.id} className="cast-row">
    <img src={imgSrc(actor.profile_path, 92, 'avatar')} alt={actor.name} className="actor-img" />
    <div>{actor.name}</div>
    <div>As...</div>
    <div className="bold-white-text">{actor.character}</div>
  </div>
);

const CastList = ({ cast }) => (
  <section className="cast-list">
    {cast.map((actor) => {
      return actorRow(actor);
    })}
  </section>
);

CastList.propTypes = {
  cast: PropTypes.arrayOf(actorType).isRequired,
};

export default CastList;
