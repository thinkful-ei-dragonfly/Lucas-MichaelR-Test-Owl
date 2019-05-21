import React from 'react';
import renderer from 'react-test-renderer';

import Stage from './Stage';

import STORE from './store';

const stageUsers = STORE.participants.filter(participant => participant.onStage === true);

describe('<Stage />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<Stage users={stageUsers}></Stage>).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/Stage .test.js
    expect(tree).toMatchSnapshot();
  })
})