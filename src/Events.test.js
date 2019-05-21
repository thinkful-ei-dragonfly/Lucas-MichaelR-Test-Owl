import React from 'react';
import renderer from 'react-test-renderer';

import Event from './Events';

const event = {
  participantId: 3,
  type: 'leave-stage',
  timestamp: 1548852724247
};

describe('<Events />', () => {
  it('renders without crashing [snapshot test]', () => {
    // Render this component as JSON
    const tree = renderer.create(<Event key={1} userId={event.participantId} type={event.type} time={event.time} message={event.message} timestamp={event.timestamp} />).toJSON();
    // Checks wether this matches the previous snapshot
    // The previous snapshot will be stored in __snapshots__/Events .test.js
    expect(tree).toMatchSnapshot();
  })
})