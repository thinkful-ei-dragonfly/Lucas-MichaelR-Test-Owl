import React from 'react';
import './App.css';
import './Userlist.css';
import 'material-design-icons'

import UserList from './UserList';
import Stage from './Stage';
import Chat from './Chat';
import SidebarHeader from './SidebarHeader';

import STORE from './store';

function App() {

  const stageUsers = STORE.participants.filter(participant => participant.onStage === true);

  let sidebar;

  if (STORE.sidebarDisplay === 'users') {
    sidebar = <UserList participants={STORE.participants}/>
  } else if (STORE.sidebarDisplay === 'chat') {
    sidebar = <Chat events={STORE.chatEvents} />
  }

  return (
    <div className="App">
      <header role='banner' className="headernav"></header>

      <div className="sidebar">
        <SidebarHeader />
        {sidebar}
      </div>
      <Stage users={stageUsers}></Stage>
    </div>
  );
}

export default App;
