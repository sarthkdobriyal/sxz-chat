import React from 'react'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://www.svgrepo.com/show/499764/user.svg" alt="" />
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