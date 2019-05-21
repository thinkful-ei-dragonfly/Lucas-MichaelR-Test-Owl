import React from 'react';
import './User.css';
import 'material-design-icons'

function User(props) {
  let activeStatus = 'in session';
  if (props.onStage) {
    activeStatus = 'on stage';
  };
  if (props.display === 'inList') {
    return <div className="User">
      <div className="image-wrapper">
        <img src={props.avatar} alt="user_avatar"/>
      </div>
      <div className="user-info">
        <h4>{props.name}</h4>
        <p className="user-status">{activeStatus}</p>
      </div>
    </div>
  } else if (props.display === 'onStage') {
    return <div className='stage-user'>
      <div className='stage-user-info'>
        <p><span className='stage-user-name'>{props.name}</span></p>
        <span className='stage-icons'>
          <span className='volume'><span class="lnr lnr-volume-high"></span></span>
          <span className='search'><span class="lnr lnr-magnifier"></span></span>
        </span>
      </div>
      <img src={props.avatar} className="stage-img" alt={props.name + ' profile photo'}/>
    </div>
  }
}

export default User;
