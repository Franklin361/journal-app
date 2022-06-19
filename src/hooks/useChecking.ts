import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase';
import { login, logout, startLoadingNotes } from '../redux';
// import { startLoadingNotes } from '../store/journal';
import { useAppSelector,useAppDispatch } from './';



export const useCheckAuth = () => {
  
    const { status } = useAppSelector( state => state.auth );
    const dispatch = useAppDispatch();

    useEffect(() => {
        
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) return dispatch( logout() );
            // console.log('aaaa')
            const { uid, email, displayName, photoURL } = user;
            if(displayName) dispatch( login({ uid, email, displayName, photoURL }) );
            dispatch( startLoadingNotes() );
        })
    }, []);

    return status;
}
