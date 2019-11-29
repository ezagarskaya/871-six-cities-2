import React from 'react';
import renderer from 'react-test-renderer';
import Map from '../map/map.jsx';
import offers from '../../mocks/offers.js';
import cities from '../../mocks/cities';

jest.mock(`../map/map`);

it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Map
    offers={offers}
    current={cities[0]}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
