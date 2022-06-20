import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../utils';

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_DATABASEURL,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID
} = getEnvironments()

const firebaseConfig: FirebaseOptions = {
  apiKey: VITE_APIKEY as string,
  authDomain: VITE_AUTHDOMAIN as string,
  databaseURL: VITE_DATABASEURL as string,
  projectId: VITE_PROJECTID as string,
  storageBucket: VITE_STORAGEBUCKET as string,
  messagingSenderId: VITE_MESSAGINGSENDERID as string,
  appId: VITE_APPID as string
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);