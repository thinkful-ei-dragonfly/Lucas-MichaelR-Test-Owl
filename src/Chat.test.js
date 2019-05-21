import React from 'react';
import renderer from 'react-test-renderer';

import Chat from './Chat';

import STORE from './store';

describe('<Chat  />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<Chat events={STORE.chatEvents}/>).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/Chat .test.js
    expect(tree).toMatchSnapshot();
  })
})