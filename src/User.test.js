import React from 'react';
import renderer from 'react-test-renderer';

import User from './User';

const user = {
  id: 1,
  name: 'Koren Templeton',
  avatar:
      'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
  inSession: true,
  onStage: true
}

describe('<User  />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<User key={user.id} display={'inList'}avatar={user.avatar} name={user.name} onStage={user.onStage}/>).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/User .test.js
    expect(tree).toMatchSnapshot();
  })
})