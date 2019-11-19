import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const CityList = (props) => {
  const className = `locations__item-link tabs__item`;

  return (
    <>
      {props.cities.map((city) => (
        <li key={city.name} className="locations__item">
          <a onClick={() => props.dispatch(ActionCreator.changeCity(city.name))}
            className={props.current.name === city.name ? className + ` tabs__item--active` : className} href="#">
            <span>{city.name}</span>
          </a>
        </li>
      )
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  current: state.currentCity,
});

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  current: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(CityList);
