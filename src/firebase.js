// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJJSrQ3qOF6PEe6KiEcLKWA1DHNQ5HvEo",
    authDomain: "sxz-chat.firebaseapp.com",
    projectId: "sxz-chat",
    storageBucket: "sxz-chat.appspot.com",
    messagingSenderId: "416058873725",
    appId: "1:416058873725:web:2c0381d504293b1d7fde14"
  };

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage =  getStorage(app)
 const auth = getAuth(app);
 const db = getFirestore(app);

 export { auth, storage }
 export default db
 

 
 