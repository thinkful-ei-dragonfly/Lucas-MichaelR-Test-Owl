import React from 'react';
import './Stage.css'
import User from './User';

function Stage(props) {
  let users = props.users.map(user => <User key={user.id} display={'onStage'} avatar={user.avatar} name={user.name} onStage={user.onStage}/>);

  return <div className="Stage">
    {users}
  </div>
}

export default Stage;
