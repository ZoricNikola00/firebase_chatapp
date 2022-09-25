import React, { useState } from 'react'
import { auth, db } from '../firebase'
import firebase from 'firebase/compat/app';
import {FaPaperPlane} from 'react-icons/fa'

const SendMsg = ({scroll}) => {
    const [msg,setMsg]=useState('')
    const  sendMsg=async(e)=>{
        e.preventDefault()
        const {uid,photoURL}=auth.currentUser
        if(msg){
        await db.collection('messages').add({
            text:msg,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp()
        })}
        setMsg('')
        scroll.current.scrollIntoView({behavior:'smooth'})
    }
  return (
    <div className='sndMsg'>
        <form onSubmit={sendMsg} >
            <input value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder='Message...'/>
            <button type='submit' className='sndBtn'><FaPaperPlane/></button>
        </form>
    </div>
  )
}

export default SendMsg