import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import PlacesFound from './places-found';
import offers from '../../mocks/offers.js';
import cities from '../../mocks/cities';

const mockStore = configureStore([]);

describe(`My Connected React-Redux Component`, () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      currentCity: cities[0],
      currentOffers: offers.filter((offer) => offer.city === cities[0].name),
      offers,
      cities,
    });

    component = renderer.create(
        <Provider store={store}>
          <PlacesFound />
        </Provider>
    );

  });

  it(`should render with given state from Redux store`, () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

