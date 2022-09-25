import React from 'react'
import firebase from 'firebase/compat/app'
import {auth} from "../firebase.js"

const SignIn = () => {
    const signIn=()=>{
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
  return (
    <>
        <button onClick={signIn}>Sign In</button>
    </>
  )
}

export default SignIn