import React from 'react';

import PlacesList from '../places-list/places-list.jsx';

const PlacesNear = (props) => {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        <PlacesList offers={findOffer(props)}/>
      </div>
    </section>
  );
};

const findOffer = (props) => {
  // eslint-disable-next-line consistent-return
  const res = props.offers.filter((offer) => {
    if (offer.id !== +props.id) {
      return offer;
    }
  });
  return res;
};


export default PlacesNear;

