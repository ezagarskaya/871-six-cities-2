import React from 'react';
import {connect} from 'react-redux';

import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import CityList from '../city-list/city-list.jsx';
import PlacesFound from '../places-found/places-found.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

const Main = (props) => {
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {
          props.offers ?
            <main className="page__main page__main--index">
              <h1 className="visually-hidden">Cities</h1>
              <div className="tabs">
                <section className="locations container">
                  <ul className="locations__list tabs__list">
                    <CityList />
                  </ul>
                </section>
              </div>

              <div className="cities">
                <div className="cities__places-container container">
                  <section className="cities__places places">
                    <h2 className="visually-hidden">Places</h2>
                    <PlacesFound />
                    <form className="places__sorting" action="#" method="get">
                      <span className="places__sorting-caption">Sort by</span>
                      <span className="places__sorting-type" tabIndex="0">
                        Popular
                        <svg className="places__sorting-arrow" width="7" height="4">
                          <use href="#icon-arrow-select"></use>
                        </svg>
                      </span>
                      <ul className="places__options places__options--custom places__options--opened">
                        <li className="places__option places__option--active" tabIndex="0">Popular</li>
                        <li className="places__option" tabIndex="0">Price: low to high</li>
                        <li className="places__option" tabIndex="0">Price: high to low</li>
                        <li className="places__option" tabIndex="0">Top rated first</li>
                      </ul>
                    </form>
                    <PlacesList />
                  </section>
                  <div className="cities__right-section">
                    <Map />
                  </div>
                </div>
              </div>
            </main>
            :
            <MainEmpty />
        }
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  offers: state.currentOffers,
});

export default connect(mapStateToProps)(Main);
