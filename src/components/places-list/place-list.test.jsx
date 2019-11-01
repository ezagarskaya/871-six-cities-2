import React from 'react';
import renderer from 'react-test-renderer';
import PlaceList from '../places-list/places-list.jsx';
import offers from '../../mocks/offers.js';

it(`PlaceList correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<PlaceList
    apartments={offers}
    onCardHover={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
