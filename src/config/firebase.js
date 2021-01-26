  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var firebaseConfig = {
    apiKey: "AIzaSyCQn67hGIJbFoLxKYfWr3OkINB5hAOYa34",
    authDomain: "react-firebase-c6b34.firebaseapp.com",
    projectId: "react-firebase-c6b34",
    storageBucket: "react-firebase-c6b34.appspot.com",
    messagingSenderId: "489671211136",
    appId: "1:489671211136:web:3306568c416b9f90d14e65",
    measurementId: "G-EX9PE3HR8G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampeInSnapshots: true});
//   firebase.analytics();

export default firebase;