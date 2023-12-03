import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBK8_SlSZOIcGfgNuwceBTuPVBATnD-4bY",
    authDomain: "crud-e9e54.firebaseapp.com",
    projectId: "crud-e9e54",
    storageBucket: "crud-e9e54.appspot.com",
    messagingSenderId: "1226143790",
    appId: "1:1226143790:web:8583c7e2b1f608cbd507bf"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }else{
    firebase.app()
  }

  const database = firebase.database()

  export {database,firebase}