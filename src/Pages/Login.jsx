import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


function Login() {

  const [err , setErr] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth,email,password);
      navigate("/")
    }catch(err){
      setErr(true);
    }
  }

  return (
    <div className='register__container'>
        <div className='form-wrapper'>
            <span className='logo'>SXZ Chat</span>
            <span className='title'>Login</span>
            <form className='form' onSubmit={handleSubmit}>
                
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>


                <button  className='button'>Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
            {err && <span>Error</span>}
        </div>

    </div>
  )
}

export default Login