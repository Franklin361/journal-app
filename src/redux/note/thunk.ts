import { Dispatch } from '@reduxjs/toolkit';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import  {FirebaseDB} from '../../firebase/config';
import { RootState, addNewEmptyNote, savingNewNote, setActiveNote } from '../';
import { setNotes } from './noteSlice';
import { loadNotes } from '../../utils';

interface Note extends Record<string, any> {
    title: string,
    body: string,
    date: number
}

export const startNewNote = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        dispatch(savingNewNote());

        const { uid } = getState().auth;

        const newNote: Note = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        try {
            const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
            await setDoc(newDoc, newNote);

            newNote.id = newDoc.id;

            dispatch(addNewEmptyNote(newNote as any));
            dispatch(setActiveNote(newNote as any));
        } catch (error) {
            console.log(error)
        }

    }
}

export const startLoadingNotes = () => {
    return async( dispatch: Dispatch, getState: () => RootState ) => {
        
        const { uid } = getState().auth;
        if ( !uid ) throw new Error('UID no exists!');

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ) );
    }
}