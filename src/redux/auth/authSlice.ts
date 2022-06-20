import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuhtState } from '../../interfaces';


const initialState: AuhtState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
}

type LoginAction = Pick<AuhtState, "uid" | "email" | "displayName" | "photoURL">

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<LoginAction>) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.photoURL = payload.photoURL;
        },

        logout: (state) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
        },

        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    }
});

export const { checkingCredentials, login, logout } = authSlice.actions;

export default authSlice.reducer