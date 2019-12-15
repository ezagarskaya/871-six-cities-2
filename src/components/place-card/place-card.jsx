import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

const PlaceCard = (props) => {
  const {offer, id} = props;
  const {title, price, rating, type} = offer;

  return (
    <article onMouseOver={() => props.dispatch(ActionCreator.getActive(offer.id))}
      onMouseLeave={() => props.dispatch(ActionCreator.getActive(null))}
      key={id} className="cities__place-card place-card" >
      { props.offer.is_premium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> :
        <div></div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`${offer.preview_image}`} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&#8364;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{pathname: `/offer/` + offer.id}}
          >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

// PlaceCard.propTypes = {
//   offer: PropTypes.object.isRequired,
// };
export default connect(mapDispatchToProps)(PlaceCard);
