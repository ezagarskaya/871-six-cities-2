import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import offers from '../../mocks/offers.js';

jest.mock(`../map/map`);

it(`Main correctly renders after relaunch`, () => {
  const app = renderer
  .create(<Main
    apartments={offers}
    onCardHover={() => {}}
  />)
  .toJSON();

  expect(app).toMatchSnapshot();
});
