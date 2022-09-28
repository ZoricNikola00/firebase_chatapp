import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from '../firebase'
import {FaArrowDown} from 'react-icons/fa'
import SendMsg from './SendMsg'
import SignOut from './SignOut'

const Chat = () => {
    const [messages, setMessages] = useState([])
    const [showToBottom,setShowToBottom]=useState(false)
    const scroll=useRef('')
    const width = window.innerWidth<440;
    useEffect(()=>{
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        
        })
    },[])
    if(width){
        window.onscroll=(()=>{
            if(document.documentElement.scrollTop>100){
                setShowToBottom(true)
            }
            else{
                setShowToBottom(false)
            }
          })
    }
    if(width){
        window.onscroll=(()=>{
            if(document.documentElement.scrollTopMax-document.documentElement.scrollTop>100){
                setShowToBottom(true)
            }
            else{
                setShowToBottom(false)
            }
          })
    }
    const scrollTo=(e)=>{
    if(!width){
        if(e.target.scrollTopMax-e.target.scrollTop>100){
            setShowToBottom(true)
        }
        else{
            setShowToBottom(false)
        }
    }
    }
        
  return (
    <div className='chatContainer'>
        <SignOut/>
        <div  className='chat'>
            <div className='msgs' onScroll={scrollTo}>
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
            {showToBottom && <div onClick={(e)=>{
                const target=document.querySelector('.msgs')
                const height=target.scrollHeight
                width?window.scrollTo(0,height):target.scrollTo(0,height)
                }} className="ToBottom"><FaArrowDown/></div>}
            </div>
        </div>
        <SendMsg scroll={scroll}/>
    </div>
  )
}

export default Chat