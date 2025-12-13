import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword,deleteUser } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getDatabase, set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";


const firebaseConfig = {
apiKey: "AIzaSyDQOhmv0OH62OMDc_QeoDn9GTwdMmfep2U",
  authDomain: "game-428f1.firebaseapp.com",
  databaseURL: "https://game-428f1-default-rtdb.firebaseio.com",
  projectId: "game-428f1",
  storageBucket: "game-428f1.firebasestorage.app",
  messagingSenderId: "823488500805",
  appId: "1:823488500805:web:74574f77a25762bde03f2c",
  measurementId: "G-X2ZZKDBNTB"
};

const app = initializeApp(firebaseConfig);


const db = getDatabase(app);
const auth = getAuth(app);  


export { db, set, ref, get, remove, update, auth, createUserWithEmailAndPassword, sendEmailVerification, signOut, signInWithEmailAndPassword,deleteUser};