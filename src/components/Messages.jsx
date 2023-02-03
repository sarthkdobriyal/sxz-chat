import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/chatContext';
import db from '../firebase';
import Message from './Message'

export const Messages = () => {
    const { data } = useContext(ChatContext);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(doc(db,"chats",data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages)
        })
        return () => {
            unsub();
        }
    },[data.chatId])


  return (
    <div className='messages'>
        {
            
            messages.map((message) => {
                <Message message={message} key={message.id} />

            })
        }

    </div>
  )
}
