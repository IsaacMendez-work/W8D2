//Import firebase!
import firebase from 'firebase/app';
import 'firebase/database';

const config = { 
    apiKey: "AIzaSyCZr7sEJ-XgQnTJ2FWrKErtZA--uoEyegE",
    authDomain: "lecture-firebase-f15af.firebaseapp.com",
    databaseURL: "https://lecture-firebase-f15af-default-rtdb.firebaseio.com",
    projectId: "lecture-firebase-f15af",
    storageBucket: "lecture-firebase-f15af.appspot.com",
    messagingSenderId: "206800055592",
    appId: "1:206800055592:web:bbfac78abf0d0dd9cdf41d"
}

firebase.initializeApp(config);

function getFirebaseRef(refPath) {
    return firebase.database().ref(refPath);
  }
  
  export default {
    getFirebaseRef: getFirebaseRef
  };