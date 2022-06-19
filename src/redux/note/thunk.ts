import { Dispatch } from '@reduxjs/toolkit';
import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { RootState, addNewEmptyNote, savingNewNote, setActiveNote } from '../';
import { askSaveNote, setNotes, setSaving, updateNote } from './noteSlice';
import { loadNotes } from '../../utils';
import toast from 'react-hot-toast';
import { Note as NoteComplete } from '../../interfaces/note';
import { openModalAsk } from '../modal/modalSlice';

interface Note extends Record<string, any> {
    title: string,
    body: string,
    date: number
}

export const startNewNote = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { notes, active, askSaveNote: isWantingSave } = getState().note
        // TODO: refactorizar los if
        // TODO: refactorizar los nombres de la variable isWantingSave y funcion y estado
        console.log(isWantingSave)
        if (active && isWantingSave) {

            const noteSearch = notes.find(item => item.id === active.id);

            if (noteSearch?.body?.trim() !== active.body?.trim() ||
                noteSearch?.title?.trim() !== active.title?.trim()
            ) {
                dispatch(openModalAsk());

            } else {
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
        } else {
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
}

export const startLoadingNotes = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { uid } = getState().auth;
        if (!uid) throw new Error('UID no exists!');

        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}


export const startAskSaveNote = (note: NoteComplete) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { notes, active, askSaveNote: isWantingSave } = getState().note
        // TODO: refactorizar los if
        // TODO: refactorizar los nombres de la variable isWantingSave y funcion y estado
        if (active && isWantingSave) {

            const noteSearch = notes.find(item => item.id === active.id);

            if (noteSearch?.body?.trim() !== active.body?.trim() ||
                noteSearch?.title?.trim() !== active.title?.trim()
            ) {
                dispatch(openModalAsk());

            } else {
                dispatch(setActiveNote(note))
            }
        } else {
            dispatch(askSaveNote(true))
            dispatch(setActiveNote(note))
        }


    }
}

export const startSaveNote = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        console.log('gu')
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active: note, askSaveNote: askme } = getState().note;


        if (note) {

            // if(askme) dispatch(askSaveNote(false));

            const { id, ...noteToFireStore } = note;

            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
            await setDoc(docRef, noteToFireStore, { merge: true });

            dispatch(updateNote(note));
            toast.success('Note updated successfully! ✅', { position: 'bottom-right' })
        }

    }
}
