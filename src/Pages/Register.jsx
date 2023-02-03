import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import db  from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const [err, setErr] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];


      try{
        const res = await createUserWithEmailAndPassword(auth, email, password)

        const storageRef = ref(storage, displayName);

        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',(snapshot) => {

        }, (error) => {
          setErr(true)
          console.log(error);
        },async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL,
          });
          await setDoc(doc(db,"users", res.user.uid),{
            uid:res.user.uid,
            displayName,
            email,
            photoURL:downloadURL,
          })
          await setDoc(doc(db,"userChats", res.user.uid), {})
          navigate("/");
          
        })
      }
      catch(err){
        setErr(true);
        console.log(err.message);
      }
        



  } 




  return (
    <div className='register__container'>
        <div className='form-wrapper'>
            <span className='logo'>SXZ Chat</span>
            <span className='title'>Register</span>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                
                <input style={{display:"none"}} type="file" id="file" />
                <label htmlFor='file' className='avatar'>
                <img src="https://www.svgrepo.com/show/498037/gallery-export.svg" alt="" />
                    Add an Avatar</label> 
                <button className='button'>Sign Up</button>
                {err && <span>Error</span>}
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>

    </div>
  )
}

export default Register;