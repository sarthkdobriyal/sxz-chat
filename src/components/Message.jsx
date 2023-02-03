import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/chatContext';
import moment from 'moment'

function Message({message}) {

  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  
  
  return (
    <div className={`message ${message.senderID === currentUser.uid && "owner"}`}>
      <div className="messageInfo">
        <img 
        src={message.senderID === currentUser.uid ? currentUser.photoURL:data.user.photoURL}
         alt="" />
        <span>{moment.utc(message.date.seconds*1000).format("hh:mm:ss")}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message