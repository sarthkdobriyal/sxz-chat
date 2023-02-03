import React from 'react'


function Register() {
  return (
    <div className='register__container'>
        <div className='form-wrapper'>
            <span className='logo'>SXZ Chat</span>
            <span className='title'>Register</span>
            <form className='form'>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor='file' className='avatar'>
                <img src="https://www.svgrepo.com/show/498037/gallery-export.svg" alt="" />
                    Add an Avatar</label> 
                <button className='button'>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>

    </div>
  )
}

export default Register