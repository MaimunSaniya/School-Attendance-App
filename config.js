import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAGLrB0u78gOo460WX9pxREPPtmgbeJpuc",
    authDomain: "school-attendence-app-e3c36.firebaseapp.com",
    databaseURL: "https://school-attendence-app-e3c36-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-e3c36",
    storageBucket: "school-attendence-app-e3c36.appspot.com",
    messagingSenderId: "664250451213",
    appId: "1:664250451213:web:f3edcb0c4b66de883bdc44"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.database();
