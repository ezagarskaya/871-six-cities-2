import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main';

Enzyme.configure({adapter: new Adapter()});

it(`Main is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<Main
    title={[]}
    handleClick={clickHandler}
  />);

  const title = app.find(`.place-card__name`).at(0);
  title.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
