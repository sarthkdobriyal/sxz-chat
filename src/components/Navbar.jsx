import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

function Navbar() {
  return (
    <div className='navbar'>
        <span className='logo'>SxZ Chat</span>
        <div className="user">
            <img src="https://www.svgrepo.com/show/499764/user.svg" alt="" />
            <span>John</span>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar