import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/chatContext';

function Message({message}) {

  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img 
        src=""
         alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  )
}

export default Message