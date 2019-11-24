import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';
import {connect} from 'react-redux';

const PlaceList = (props) => {
  return (
    props.current ?
    <div className="cities__places-list places__list tabs__content">
      {props.current.map((offer, i) => {
        return (
          <PlaceCard
            key={`apartment-${i}`}
            offer={offer}
          />
        );
      })}
    </div> :
    null
  );
};

const mapStateToProps = (state) => ({
  current: state.currentOffers,
});

// PlaceList.propTypes = {
//   current: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(PlaceList);
