import React from 'react';

import STORE from './store';

class SidebarHeader extends React.Component {
  constructor(props) {
    super();
    this.handleChatClick = this.handleChatClick.bind(this);
    this.handleParticipantsClick = this.handleParticipantsClick.bind(this);
  }

  handleChatClick() {
    STORE.changeSidebarDisplay('chat')
  }

  handleParticipantsClick() {
    STORE.changeSidebarDisplay('users')
  }

  render() {
    return <div className="sidebar-header">
      <p onClick={this.handleChatClick}>Chat</p>
      <p onClick={this.handleParticipantsClick}>Participants ({STORE.participants.length})</p>
    </div>
  }
}

export default SidebarHeader;