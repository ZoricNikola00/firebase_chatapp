import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAmj61UdKPQwONnZDFD_A-NSYmAd5-T4AU",
    authDomain: "chat-app005.firebaseapp.com",
    projectId: "chat-app005",
    storageBucket: "chat-app005.appspot.com",
    messagingSenderId: "783252173320",
    appId: "1:783252173320:web:b98f8b7006b98b9c4657bd",
    measurementId: "G-0KRXRSRBD1"
})


const db=firebaseApp.firestore()

const auth=firebase.auth()
  
export {db, auth}
