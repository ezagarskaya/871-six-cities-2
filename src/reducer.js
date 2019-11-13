import offers from './mocks/offers.js';
import cities from './mocks/cities.js';

const initialState = {
  currentCity: cities[0],
  currentOffers: offers.filter(offer => offer.city === cities[0].name),
  offers,
  cities,
};

export const ActionCreator = {
  changeCity: (name) => ({
    type: `CHANGE_CITY`,
    payload: name,
  }),

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`: return Object.assign({}, state, {
      currentCity: state.cities.find(city => city.name === action.payload),
      currentOffers: state.offers.filter(offer => offer.city === action.payload),
    });

    case `RESET`: return Object.assign({}, initialState);
  }

  return state;
};

