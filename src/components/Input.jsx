import React from 'react'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder="Type Something..." />
      <div className="send">
        <img src="https://www.svgrepo.com/show/457216/paperclip.svg" alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src="https://www.svgrepo.com/show/498037/gallery-export.svg" alt="" />
          
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input