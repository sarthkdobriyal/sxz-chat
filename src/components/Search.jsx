import React, { useState } from 'react'
import db from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Search() {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

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


  return (
    <div className='search'>
      <div className="searchForm">
        <input onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} type="text" name="" id=""  placeholder='Search for a chat'/>
      </div>
      {err && <span>User Not Found</span>}
      {
      
        user && <div className='userChat'>
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