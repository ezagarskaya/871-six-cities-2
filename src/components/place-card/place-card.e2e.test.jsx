import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import offers from '../../mocks/offers.js';

Enzyme.configure({adapter: new Adapter()});

describe(`PlaceCard`, () => {
  it(`PlaceCard is correctly rendered after relaunch`, () => {
    const onHoverHandler = jest.fn();
    const app = shallow(<PlaceCard
      apartment={{
        imageSrc: offers[0].imageSrc,
        price: offers[0].price,
        name: offers[0].name
      }}
      onCardHover={onHoverHandler}
    />);
    const card = app.find(`.place-card`).at(0);
    card.simulate(`mouseover`);
    expect(onHoverHandler).toHaveBeenCalledTimes(1);
  });
});


