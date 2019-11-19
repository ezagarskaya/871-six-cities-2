import {
  ActionCreator,
  reducer,
  ActionType,
} from "./reducer";
import offers from './mocks/offers.js';
import cities from './mocks/cities.js';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity()).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: cities[0].name,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      currentCity: cities[0].name,
      currentOffers: offers.filter((offer) => offer.city === cities[0].name),
      offers,
      cities,
    });
  });

  it(`Reducer should change city`, () => {
    expect(reducer({
      currentCity: cities[0].name,
      currentOffers: offers.filter((offer) => offer.city === cities[0].name),
    }, {
      type: ActionType.CHANGE_CITY,
      payload: cities[1].name,
    })).toEqual({
      currentCity: cities[1].name,
      currentOffers: offers.filter((offer) => offer.city === cities[1].name),
    });
  });
});
