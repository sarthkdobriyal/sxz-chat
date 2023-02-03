import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>SxZ Chat</span>
        <div className="user">
            <img src="https://www.svgrepo.com/show/499764/user.svg" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar