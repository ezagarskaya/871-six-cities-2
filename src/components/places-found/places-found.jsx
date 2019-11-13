import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PlacesFound = (props) => {

  return (
    <b className="places__found">{props.current.count} places to stay in {props.current.name}</b>
  );
}

const mapStateToProps = (state) => ({
  current: state.currentCity,
});

export default connect(mapStateToProps)(PlacesFound);
