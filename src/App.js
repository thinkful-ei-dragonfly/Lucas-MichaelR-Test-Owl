import React from 'react';
import './App.css';

import UserList from './UserList';
import Stage from './Stage';

import STORE from './store';

function App() {
  const stageUsers = STORE.participants.filter(participant => participant.onStage === true);

  return (
    <div className="App">
      <UserList participants={STORE.participants}/>
      <Stage users={stageUsers}></Stage>
    </div>
  );
}

export default App;
