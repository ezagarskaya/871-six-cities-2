import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const PlacesFound = (props) => {

  return (
    props.current ?
    <b className="places__found">{props.offers.length} places to stay in {props.offers[0].city.name}</b>:
    null
  );
};

const mapStateToProps = (state) => ({
  current: state.currentCity,
  offers: state.currentOffers,
});

// PlacesFound.propTypes = {
//   current: PropTypes.object.isRequired,
// };

export default connect(mapStateToProps)(PlacesFound);
