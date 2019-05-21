import React from 'react';
import './App.css';
import './Userlist.css';
import 'material-design-icons'

import UserList from './UserList';
import Stage from './Stage';
import Chat from './Chat';

import STORE from './store';

function App() {
  const stageUsers = STORE.participants.filter(participant => participant.onStage === true);

  return (
    <div className="App">
      <header role='banner' className="headernav"></header>
      <Chat events={STORE.chatEvents} />
      <UserList participants={STORE.participants}/>
      <Stage users={stageUsers}></Stage>
    </div>
  );
}

export default App;
