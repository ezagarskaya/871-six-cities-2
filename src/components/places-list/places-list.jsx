import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const PlaceList = ({apartments, onCardHover}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {apartments.map((apartment, i) => {
        return (
          <PlaceCard
            key={`apartment-${i}`}
            apartment={apartment}
            onCardHover={onCardHover}
          />
        );
      })}
    </div>
  );
};

PlaceList.propTypes = {
  apartments: PropTypes.array.isRequired,
  onCardHover: PropTypes.func.isRequired,
};

export default PlaceList;
