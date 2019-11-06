import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../map/map.jsx';
import offers from '../../mocks/offers.js';

jest.mock(`../map/map`);

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Map
    apartments={offers}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
