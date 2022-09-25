import React from 'react'
import { auth } from '../firebase'

const SignOut = () => {
  return (
    <div>
        <button className='SignBtn out' onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default SignOut