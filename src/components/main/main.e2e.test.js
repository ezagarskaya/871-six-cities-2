import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import offers from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

it(`Main is correctly rendered after relaunch`, () => {
  const onHoverHandler = jest.fn();
  const app = mount(<Main
    apartments={offers}
    onCardHover={onHoverHandler}
  />);

  const card = app.find(`.place-card`).at(0);
  card.simulate(`mouseover`);

  expect(onHoverHandler).toHaveBeenCalledTimes(1);
});
