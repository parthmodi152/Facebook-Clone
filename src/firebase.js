import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUsOY2uKHM085K_yCJpjadosUpeeHhILI",
  authDomain: "facebook-rf-stack.firebaseapp.com",
  projectId: "facebook-rf-stack",
  storageBucket: "facebook-rf-stack.appspot.com",
  messagingSenderId: "616803115314",
  appId: "1:616803115314:web:7f10fe7c0a53efd4aff72b",
  measurementId: "G-FMYP9GX55M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
