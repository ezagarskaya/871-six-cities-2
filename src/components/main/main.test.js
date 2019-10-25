import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Main
    title={[]}
    handleClick={() => {}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
