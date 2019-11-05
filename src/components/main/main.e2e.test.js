import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';
import Map from '../map/map.jsx';
import offers from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

describe(`Проверка <Main>`, () => {
  it(`Main is correctly rendered after relaunch`, () => {
    const onHoverHandler = jest.fn();
    const app = mount(
        <Main
          apartments={offers}
          onCardHover={onHoverHandler}>
        </Main>
    );
    const map = mount(
      <Map
        apartments={offers}/>
    );

    const card = app.find(`.place-card`).at(0);
    card.simulate(`mouseover`);

    expect(onHoverHandler).toHaveBeenCalledTimes(1);
  });
});
