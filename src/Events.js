import React from 'react';
import './Events.css';
import STORE from './store';

import 'material-design-icons'

function Event(props){
  let userList = STORE.participants.filter(participant => participant.id === props.userId);

  let chatString = '';
  let displayTime;
  let displayTimeString= '';

  if (props.time) {
    displayTime = new Date(props.time);
    displayTimeString = `${displayTime.getHours()}:${displayTime.getMinutes()} a.m.`;
    if (displayTime.getHours() > 12) {
      displayTimeString = `${displayTime.getHours()}:${displayTime.getMinutes()} p.m.`;
    }
  }

  switch (props.type) {
    case 'thumbs-down':
      chatString = <p><span className='chat-user-name'>{userList[0].name}</span> gave a thumbs down <span className="lnr lnr-thumbs-up"></span></p>
      break;
    case 'thumbs-up':
      chatString = <p><span className='chat-user-name'>{userList[0].name}</span> gave a thumbs up <span className="lnr lnr-thumbs-down"></span></p>
      break;
    case 'clap':
    chatString = <p><span className='chat-user-name'>{userList[0].name}</span> clapped <span className="lnr lnr-hand"></span><span className="lnr lnr-hand"></span></p>
      break;
    case 'raise-hand':
      chatString = <p><span className='chat-user-name'>{userList[0].name}</span> raise their hand <span className="lnr lnr-hand"></span></p>
      break;
    case 'join':
      chatString = <p><span className='chat-user-name'>{userList[0].name}</span> joined</p>
      break;
    case 'join-stage':
      chatString = <p><span className='chat-user-name'>{userList[0].name}</span> joined the stage</p>
      break;
    case 'message':
      chatString = (
        <div className="User">
          <div className="image-wrapper">
            <img src={userList[0].avatar} alt="user_avatar"/>
          </div>
          <div className="user-info">
            <p><span className='chat-user-name'>{userList[0].name}</span> <span className="chat-time">{displayTimeString}</span></p>
            {props.message}
          </div>
        </div>
      )
      break;
    default:
      chatString = <p><span className='chat-user-name'>{userList[0].name}</span> joined</p>
  }

  return chatString;
}

export default Event;
