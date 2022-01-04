 import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCTpvaV9Zc1nju9mWEcuE2Wb2I-6nUtqlA",
  authDomain: "schoolattendanceapp-dac06.firebaseapp.com",
  projectId: "schoolattendanceapp-dac06",
  storageBucket: "schoolattendanceapp-dac06.appspot.com",
  messagingSenderId: "303358333428",
  appId: "1:303358333428:web:df8a7d10a69b1a700fa9a1",
  measurementId: "G-2RHEFKE89Q"
};

// Initialize Firebase
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig); 
}

//initialize your database

  export default firebase.database()
 

  