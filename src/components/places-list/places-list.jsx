import React from 'react';
import PlaceCard from '../place-card/place-card.jsx';
import {connect} from 'react-redux';

const PlaceList = (props) => {
  if (props.offers && props.current) {
    return (
      <div className="cities__places-list places__list tabs__content">
        {props.offers.map((offer, i) => {
          return (
            <PlaceCard
              key={`apartment-${i}`}
              offer={offer}
            />
          );
        })}
      </div>
    );
  } else if (props.current) {
    return (
      <div className="cities__places-list places__list tabs__content">
        {props.current.map((offer, i) => {
          return (
            <PlaceCard
              key={`apartment-${i}`}
              offer={offer}
            />
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => ({
  current: state.currentOffers,
});

// PlaceList.propTypes = {
//   current: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(PlaceList);
