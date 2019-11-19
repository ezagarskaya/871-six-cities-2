import offers from './mocks/offers.js';
import cities from './mocks/cities.js';

const initialState = {
  currentCity: cities[0],
  currentOffers: offers.filter((offer) => offer.city === cities[0].name),
  offers,
  cities,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  changeCity: (name) => ({
    type: ActionType.CHANGE_CITY,
    payload: name,
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY: return Object.assign({}, state, {
      currentCity: state.cities.find((city) => city.name === action.payload),
      currentOffers: state.offers.filter((offer) => offer.city === action.payload),
    });
  }

  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};

