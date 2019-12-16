import React from 'react';
import {connect} from 'react-redux';

import PlacesList from '../places-list/places-list.jsx';
import Map from '../map/map.jsx';
import CityList from '../city-list/city-list.jsx';
import PlacesFound from '../places-found/places-found.jsx';
import PlacesSort from '../places-sort/places-sort.jsx';
import MainEmpty from '../main-empty/main-empty.jsx';

const Main = (props) => {
  const className = `page page--gray page--main`;

  return (
    <React.Fragment>
      <div className={!(props.offers.length > 0) ? className + ` page__main--index-empty` : className}>
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
                      <span className="header__user-name user__name">{ props.isAuthorizationRequired ? props.user.email : `Sign in`}</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <CityList />
              </ul>
            </section>
          </div>
          {!(props.offers.length > 0) ? <MainEmpty /> : (
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <PlacesFound />
                  <PlacesSort />
                  <PlacesList />
                </section>
                <div className="cities__right-section">
                  <Map id={props.card}/>
                </div>
              </div>
            </div>)}
        </main>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  offers: state.currentOffers,
  card: state.cardActive,
  isAuthorizationRequired: state.isAuthorizationRequired,
  user: state.user,
});

export default connect(mapStateToProps)(Main);
