import React from 'react';
import Event from './Events';
function Chat(props){
  // let events = sort thru the chatEvents array by timestamp;
  // inside of the map if(event.type === 'joined')
  let events = props.events.map((event, i) => <Event key={i} userId={event.participantId} type={event.type} time={event.time} message={event.message} timestamp={event.timestamp} />)
  events.sort(function(a, b) {
    return b.props.timestamp - a.props.timestamp;
  })

  return (
    <div className="chat-events">
      {events}
    </div>
  )
}
export default Chat;
