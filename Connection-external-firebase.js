import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword,deleteUser } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase, set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";


const firebaseConfig = {
 apiKey: "AIzaSyAPPyxEwclwml-IWS3sAzincKEpADlGHOI",
  authDomain: "my-game-creation.firebaseapp.com",
  databaseURL: "https://my-game-creation-default-rtdb.firebaseio.com/",
  projectId: "my-game-creation",
  storageBucket: "my-game-creation.firebasestorage.app",
  messagingSenderId: "306552972174",
  appId: "1:306552972174:web:3c007fa5cccdc332d9badf",
  measurementId: "G-3N7GB2L3B0"
};

const app = initializeApp(firebaseConfig);


const db = getDatabase(app);
const auth = getAuth(app);  


export { db, set, ref, get, remove, update, auth, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword,deleteUser};