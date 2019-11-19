import {
  ActionCreator,
  reducer,
  ActionType,
} from "./reducer";
import offers from './mocks/offers.js';
import cities from './mocks/cities.js';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: cities[0].name,
    });
  });
});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    const init = {
      currentCity: cities[0],
      currentOffers: offers.filter((offer) => offer.city === cities[0].name),
      offers,
      cities,
    };
    expect(reducer(init, {})).toEqual(init);
  });

  it(`Reducer should change city`, () => {
    expect(reducer({
      currentCity: cities[0],
      currentOffers: offers.filter((offer) => offer.city === cities[0].name),
      offers,
      cities,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: cities[1].name,
    })).toEqual({
      currentCity: cities[1],
      currentOffers: offers.filter((offer) => offer.city === cities[1].name),
      offers,
      cities,
    });
  });
});
