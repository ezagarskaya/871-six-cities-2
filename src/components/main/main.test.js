import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import offers from '../../mocks/offers.js';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Main
    apartments={offers}
    onCardHover={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
