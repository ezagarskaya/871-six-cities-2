import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import offers from '../../mocks/offers.js';

it(`PlaceCard correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<PlaceCard
    apartment={{
      imageSrc: offers[0].imageSrc,
      price: offers[0].price,
      name: offers[0].name
    }}
    onCardHover={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
