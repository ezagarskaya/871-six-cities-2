import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';
import Map from '../map/map.jsx';
import offers from '../../mocks/offers.js';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Main
    apartments={offers}
    onCardHover={() => {}}
  >
    <Map apartments={offers}/>
  </Main>)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
