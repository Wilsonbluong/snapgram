import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCF0MJStDQ1Eh1saFOVjaahc4BLzJhsQLk",
  authDomain: "firegram-85368.firebaseapp.com",
  projectId: "firegram-85368",
  storageBucket: "firegram-85368.appspot.com",
  messagingSenderId: "814839496696",
  appId: "1:814839496696:web:e37e69539700ec25a6200d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
