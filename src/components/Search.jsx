import React, { useContext, useState } from 'react'
import db from '../firebase';
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

function Search() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const currentUser = useContext(AuthContext);

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSearch = async () => {
    const q = query(collection(db,"users"), where("displayName", "==", `${username}` ))

    try{

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      })
    }catch(err){
      setErr(true);
    }
  }

  const handleSelect = async () => {
    //check whether the group exists or not
    const combinedId = currentUser.uid > user.uid ? currentUser.uid +user.uid:user.uid+currentUser.uid
    try{
      const res = await getDoc(doc(db,"chats",combinedId));
      if(!res.exists()){
        //if no chats yet create new
        await setDoc(doc(db,"chats",combinedId), {messages:[]});

        //create user chats
        await updateDoc(doc(db,"userChats", currentUser.uid),{
          [combinedId+".userInfo"]:{
            uid:user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL,
          },
          [combinedId+".date"]:serverTimestamp()
        })

        //For other user
        await updateDoc(doc(db,"userChats", user.uid),{
          [combinedId+".userInfo"]:{
            uid:currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL,
          },
          [combinedId+".date"]:serverTimestamp()
        })


      }
    }catch(err){

    }

    setUser(null);
    setUsername("")
    //create user chats
  }

  return (
    <div className='search'>
      <div className="searchForm">
        <input onKeyDown={handleKey} value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="" id=""  placeholder='Search for a chat'/>
      </div>
      {err && <span>User Not Found</span>}
      {
      
        user && <div className='userChat' onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className='userChatInfo'>
          <span>{user.displayName}</span>
        </div>
      </div>
      }
   
    </div>
  )
}

export default Search