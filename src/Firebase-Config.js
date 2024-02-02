// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth  } from "firebase/auth";

import { getFirestore} from 'firebase/firestore'
import {getStorage }  from "firebase/storage"; 




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4HVHrIFx1WDiJOOO8mq4qildraimdHPM",
  authDomain: "realtry-5a403.firebaseapp.com",
  projectId: "realtry-5a403",
  storageBucket: "realtry-5a403.appspot.com",
  messagingSenderId: "567091626359",
  appId: "1:567091626359:web:c88bfffda774ed4cd2a172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)

export const storage=getStorage(app)

export const auth=getAuth(app) 

