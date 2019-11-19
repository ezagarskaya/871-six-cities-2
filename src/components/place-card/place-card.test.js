import React from 'react';
import renderer from 'react-test-renderer';
import offers from '../../mocks/offers.js';
import PlaceCard from './place-card.jsx';

it(`PlaceCard correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<PlaceCard
    offer={offers[0]}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
