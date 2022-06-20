import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { PropsRegister } from "../interfaces";
import { FirebaseAuth } from './';
import toast from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }


    } catch (e) {
        showError(e)
        return { ok: false }
    }

}

export const registerUserWithEmailPassword = async({ email, password, displayName }:PropsRegister) => {
    
    try {
        const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;

        await updateProfile(FirebaseAuth.currentUser!, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }

    } catch (e) {
        showError(e)
        return { ok: false }
    }

}


export const loginWithEmailPassword = async({ email, password }:  Pick<PropsRegister, 'email'| 'password'>) => {

    try {
        const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );
        const { uid, photoURL, displayName } = resp.user;

        return {
            ok: true,
            uid, photoURL, displayName
        }

    } catch (e) {
        showError(e)
        return { ok: false }
    }
}

export const logoutFirebase = async() => await FirebaseAuth.signOut();


const showError = (e: unknown) => {
    const error = e as FirebaseError
    const errorCode = error.code;
    const errorMessage = `${error.message} - ${errorCode}`;
    
    switch (errorCode) {
        case 'auth/email-already-in-use': toast.error('That email already exists!'); break;
        case 'auth/wrong-password': toast.error('Email / password invalid!'); break;
        default: toast.error(errorMessage); break;
    }
}