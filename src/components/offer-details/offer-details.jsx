import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

import Map from '../map/map.jsx';
import {withReviewsList} from '../../hocs/with-reviews-list/with-reviews-list.jsx';
import ReviewsList from '../reviews-list/reviews-list.jsx';
import PlacesNear from '../places-near/places-near.jsx';
import {ActionCreator} from '../../reducer.js';

const OfferDetails = (props) => {
  const {match: {params: {id}}, offers} = props;
  const offer = offers.find((item) => item.id === +id);

  useEffect(() => {
    props.dispatch(ActionCreator.filterOffers(id));
  }, [props.hotels, id]);

  if (!offer) {
    return <div>loading</div>;
  }

  const {title,
    description,
    price,
    rating,
    images,
    goods,
    host,
    type,
    bedrooms,
  } = offer;
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-a">
                <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-a header__nav-a--profile"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery" style={{height: 404}}>
              {
                images.map((photo, i) => <div key={`id-photo${i}`} className="property__image-wrapper">
                  <img className="property__image" src={photo} alt={title}/>
                </div>)
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              { offer.is_premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating) * 20}%`}}></span>
                  <span className="visually-hidden"></span>
                </div>
                <span className="property__rating-value rating__value">{Math.round(rating)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  Bedrooms {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  Max adults {offer.max_adults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good, i) => <li key={`id-good${i}`} className="property__inside-item">
                      {good}
                    </li>)
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper${ host.is_pro ? ` property__avatar-wrapper--pro` : ``}`}>
                    <img className="property__avatar user__avatar" src={`../${host.avatar_url}`} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status"></span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              {withReviewsList(ReviewsList, id)}
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers} id={id} />
          </section>
        </section>
        <div className="container">
          <PlacesNear offers={offers} id={id}/>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  offers: state.currentOffers,
  current: state.currentCity,
  hotels: state.hotels,
});

export default connect(mapStateToProps)(OfferDetails);
