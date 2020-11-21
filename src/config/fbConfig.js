import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCsPVdEMD8MRVQvQKmhBe30IKofQnS9GIQ",
    authDomain: "sign-connekt.firebaseapp.com",
    databaseURL: "https://sign-connekt.firebaseio.com",
    projectId: "sign-connekt",
    storageBucket: "sign-connekt.appspot.com",
    messagingSenderId: "30656556124",
    appId: "1:30656556124:web:1a8018fd4fecd032434a99",
    measurementId: "G-H0YW5EPSYP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;