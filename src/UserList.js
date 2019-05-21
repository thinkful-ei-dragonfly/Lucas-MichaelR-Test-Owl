import React from 'react';

import User from './User';
import { userInfo } from 'os';

// filter STORE.participants.inSession === true

// stage will filter STORE.participants.inSession === true and STORE.participants.onStage === true

function UserList(props) {

  // const participants = props.participants;
  const participants = props.participants;
  let users = participants.sort(function(a, b) {
    return b.onStage - a.onStage;
  }).map(user => <User key={user.id} display={'inList'}avatar={user.avatar} name={user.name} onStage={user.onStage}/>);

  return <div className="UserList">
    <p>This will be a list of users</p>
    {users}
  </div>
}

export default UserList;