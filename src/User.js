import React from 'react';
import { directive } from '@babel/types';

function User(props) {
  let activeStatus = 'in session';
  if (props.onStage) {
    activeStatus = 'on stage';
  };
  if (props.display === 'inList') {
    return <div className="User">
      <div className="image-wrapper">
        <img src={props.avatar} alt="user_avatar"/>
      </div>>
      <div className="user-info">
        <h4>{props.name}</h4>
        <p className="user-status">{activeStatus}</p>
      </div>
    </div>
  } else if (props.display === 'onStage') {
    return <div>Stage user</div>
  }
}

export default User;