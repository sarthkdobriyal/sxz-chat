import React from 'react'


function Login() {
  return (
    <div className='register__container'>
        <div className='form-wrapper'>
            <span className='logo'>SXZ Chat</span>
            <span className='title'>Login</span>
            <form className='form'>
                
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>


                <button className='button'>Sign In</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>

    </div>
  )
}

export default Login