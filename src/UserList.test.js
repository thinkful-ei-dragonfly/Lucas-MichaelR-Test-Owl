import React from 'react';
import renderer from 'react-test-renderer';

import UserList from './UserList';

import STORE from './store';

describe('<UserList  />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<UserList participants={STORE.participants}/>).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/UserList .test.js
    expect(tree).toMatchSnapshot();
  })
})