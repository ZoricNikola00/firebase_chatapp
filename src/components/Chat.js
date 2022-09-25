import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import SignOut from './SignOut'

const Chat = () => {
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        
        })
    },[])
    console.log(messages)
  return (
    <div className='chatContainer'>
        <SignOut/>
        <div className='chat'>
            <div className='msgs'>
            {messages.map((x,id)=>{
                const {uid,text,photoURL}=x
                return <div  key={id} className={`msgCont ${uid===auth.currentUser.uid?'user':'other'}`}>
                    <div className={`msg ${uid===auth.currentUser.uid?'user':'other'}`} >
                        <p>{text}</p>
                        <img src={photoURL}/>              
                    </div>
                </div>
        })}
            </div>
        </div>
    </div>
  )
}

export default Chat