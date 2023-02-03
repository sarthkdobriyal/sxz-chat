import React from 'react'
import { Messages } from './Messages'
import Input from './Input'


function Chat() {
  return (
    <div className='chat'>
      {/* Header */}
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <img src="https://www.svgrepo.com/show/497633/video.svg" alt="" />
          <img src="https://www.svgrepo.com/show/447863/add-friend.svg" alt="" />
          <img src="https://www.svgrepo.com/show/498228/more.svg" alt="" />
        </div>
      </div>

      {/* Messages */}
      <Messages />


      {/* Input */}
    <Input />

    </div>
  )
}

export default Chat