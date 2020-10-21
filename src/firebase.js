import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDH9BiSLqYSc-XECHMPd1_JHOomX9kAnt0",
    authDomain: "facebook-527d9.firebaseapp.com",
    databaseURL: "https://facebook-527d9.firebaseio.com",
    projectId: "facebook-527d9",
    storageBucket: "facebook-527d9.appspot.com",
    messagingSenderId: "1056315857126",
    appId: "1:1056315857126:web:24e9576a5824ad3fbc4327",
    measurementId: "G-CNK0DMTZQQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;