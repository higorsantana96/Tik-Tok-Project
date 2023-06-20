
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
const firebaseConfig = {
  apiKey: "AIzaSyB4cn1UiL46syzIOgwQex5BCn4J5S1_UVo",
  authDomain: "tiktok---jornada-c8783.firebaseapp.com",
  projectId: "tiktok---jornada-c8783",
  storageBucket: "tiktok---jornada-c8783.appspot.com",
  messagingSenderId: "840890121221",
  appId: "1:840890121221:web:33d0726e600990f62d306c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;