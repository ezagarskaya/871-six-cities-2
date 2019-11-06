import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import offers from '../../mocks/offers.js';

jest.mock(`../map/map`);

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    offers={offers}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
