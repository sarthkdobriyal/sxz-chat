import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/chatContext';
import db, { storage } from '../firebase';
import { v4 as uuid} from 'uuid'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Input() {

  const [text,setText] = useState("");
  const [img, setImg] = useState(null);

  const currentUser = useContext(AuthContext);
  const { data } = useContext(ChatContext);


  const handleSend = async () => {
      if(img){

        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef,img);
        uploadTask.on('state_changed',(snapshot) => {

        }, (error) => {
          // setErr(true)
        },async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await updateDoc(doc(db,"chats",data.chatId), {
            messages:arrayUnion({
              id:uuid(),
              text,
              senderID:currentUser.uid,
              date:Timestamp.now(),
              img:downloadURL,
            })
          })
          
        })


      }else{
        await updateDoc(doc(db,"chats",data.chatId), {
          messages:arrayUnion({
            id:uuid(),
            text,
            senderID:currentUser.uid,
            date:Timestamp.now(),
          })
        })
        
      }
      await updateDoc(doc(db,"userChats",currentUser.uid), {
        [data.chatId + ".lastMessage"]:{
          text
        },
        [data.chatId + ".date"]: serverTimestamp(),
      })
      await updateDoc(doc(db,"userChats",data.user.uid), {
        [data.chatId + ".lastMessage"]:{
          text
        },
        [data.chatId + ".date"]: serverTimestamp(),
      })

      setText("")
      setImg(null);
  }

  return (
    <div className='input'>
      <input onChange={e=>setText(e.target.value)} value={text} type="text" placeholder="Type Something..." />
      <div className="send">
        <img src="https://www.svgrepo.com/show/457216/paperclip.svg" alt="" />
        <input type="file" style={{display:"none"}} id="file" onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <img src="https://www.svgrepo.com/show/498037/gallery-export.svg" alt="" />
          
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input