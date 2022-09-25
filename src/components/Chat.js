import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from '../firebase'
import SendMsg from './SendMsg'
import SignOut from './SignOut'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const scroll=useRef('')

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
            <div ref={scroll}></div>    
            </div>
        </div>
        <SendMsg scroll={scroll}/>
    </div>
  )
}

export default Chat