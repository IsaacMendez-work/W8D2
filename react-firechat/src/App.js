import React from 'react';
// Firebase deps
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Hooks
import { useAuthState, useDarkMode } from './hooks';
// Components
import Channel from './components/Channel';
import Loader from './components/Loader';

function App() {
  return <div></div>;
  firebase.initializeApp({ 
    apiKey: "AIzaSyCZr7sEJ-XgQnTJ2FWrKErtZA--uoEyegE",
    authDomain: "lecture-firebase-f15af.firebaseapp.com",
    databaseURL: "https://lecture-firebase-f15af-default-rtdb.firebaseio.com",
    projectId: "lecture-firebase-f15af",
    storageBucket: "lecture-firebase-f15af.appspot.com",
    messagingSenderId: "206800055592",
    appId: "1:206800055592:web:a6dd2fc585445b8acdf41d",
  });
  
  const Button = ({ onClick = null, children = null }) => (
    <button onClick={onClick}>{children}</button>
  );
  
  export default Button;
  
}

export default App;
