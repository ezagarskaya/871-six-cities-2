import {connect} from 'react-redux';
import React from 'react';
import { Link } from "react-router-dom";
import Map from '../map/map.jsx';


const OfferDetails = (props) => {
  const propsArr = props.location.props;
  console.log(propsArr)
  return <div className="page">
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
      <div className="property__gallery">
          {
            propsArr.images.map((photo, i) => <div key={`id-photo${i}`} className="property__image-wrapper">
              <img className="property__image" src={photo}/>
            </div>)
          }
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {propsArr.title}
            </h1>
            <button className="property__bookmark-button button" type="button">
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xaHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span ></span>
              <span className="visually-hidden">Rating {propsArr.rating}</span>
            </div>
            <span className="property__rating-value rating__value"></span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {propsArr.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              Bedrooms {propsArr.bedrooms}
            </li>
            <li className="property__feature property__feature--adults">
              Max adults {propsArr.max_adults}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{propsArr.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {
              propsArr.goods.map((good, i) => <li key={`id-good${i}`} className="property__inside-item">
              {good}
              </li>)
              }
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={'../../../public/' + propsArr.host.avatar_url} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {propsArr.host.name}
              </span>
              <span className="property__user-status">
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
              {propsArr.description}
              </p>
            </div>
          </div>
          {/* <ReviewList reviews={reviews} /> */}
        </div>
      </div>
      <section className="property__map map">
        <Map
        />
      </section>
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
      </section>
    </div>
  </main>
</div>;
};

// const mapStateToProps = (state) => ({
//   offer: state.currentOffer,
// });


export default OfferDetails;
