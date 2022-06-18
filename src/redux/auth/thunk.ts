import { Dispatch } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase";
import { PropsRegister } from "../../interfaces";
import { checkingCredentials, login, logout,clearNotesLogout } from "../";
// import {  } from "../note/noteSlice";

export const checkingAuthentication = () => {
    return async (dispatch: Dispatch) => {

        dispatch(checkingCredentials());

    }
}

export const startGoogleSignIn = () => {
    return async (dispatch: Dispatch) => {

        dispatch(checkingCredentials());

        const { ok, ...rest } = await singInWithGoogle();

        if (!ok) return dispatch(logout());

        dispatch(login({ ...rest } as any))
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }: PropsRegister) => {
    return async (dispatch: Dispatch) => {

        dispatch(checkingCredentials());
        
        const { ok, ...rest } = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch(logout());
        
        dispatch(login({ ...rest } as any))
        toast.success(`User created successfully!! 🥳`)

    }
}



export const startLoginWithEmailPassword = ({ email, password }: Pick<PropsRegister, 'email'| 'password'>) => {
    return async( dispatch: Dispatch ) => {

        dispatch( checkingCredentials() );

        const { ok, ...rest } = await loginWithEmailPassword({ email, password });

        if ( !ok ) return dispatch( logout() );
        
        dispatch(login({ ...rest } as any))
        toast.success(`Login done successfully!! 🥳`)
    }
}


export const startLogout = () => {
    return async( dispatch: Dispatch ) => {
        
        await logoutFirebase();
        dispatch( clearNotesLogout() );
        dispatch( logout() );

    }
}

