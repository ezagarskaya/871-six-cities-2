import React from "react";
import {connect} from 'react-redux';

import CityList from '../city-list/city-list.jsx';

const MainEmpty = (props) => {
  console.log(props)
  if (!props.current) {
    return;
  }
  return (
    <main className="page__main page__main--index page__main--index-empty">
    <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <CityList />
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in {props.current.name}</p>
            </div>
          </section>
          <div className="cities__right-section"/>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  current: state.currentCity,
});

export default connect(mapStateToProps)(MainEmpty);
