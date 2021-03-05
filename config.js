 import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCzysDEVqz4mvKNsRWselXhaBMuLEKMhPE",
    authDomain: "school-attendance-7c60f.firebaseapp.com",
    databaseURL: "https://school-attendance-7c60f-default-rtdb.firebaseio.com",
    projectId: "school-attendance-7c60f",
    storageBucket: "school-attendance-7c60f.appspot.com",
    messagingSenderId: "1032296449518",
    appId: "1:1032296449518:web:80874ea41f1f4741b17aff"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();

 
 

 
 

  