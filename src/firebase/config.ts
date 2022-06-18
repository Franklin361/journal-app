import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'; 


const firebaseConfig:FirebaseOptions = {
  apiKey: import.meta.env.VITE_APIKEY as string,
  authDomain: import.meta.env.VITE_AUTHDOMAIN as string,
  databaseURL: import.meta.env.VITE_DATABASEURL as string,
  projectId: import.meta.env.VITE_PROJECTID as string,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET as string,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID as string,
  appId: import.meta.env.VITE_APPID as string,
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB   = getFirestore( FirebaseApp );