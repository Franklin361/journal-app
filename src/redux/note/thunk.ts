import { Dispatch } from '@reduxjs/toolkit';
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { RootState, addNewEmptyNote, savingNewNote, setActiveNote } from '../';
import { deleteNoteById, setNextNote, setNotes, setSaving, updateNote } from './noteSlice';
import { fileUpload, loadNotes } from '../../utils';
import toast from 'react-hot-toast';
import { Note as NoteComplete } from '../../interfaces/note';
import { openModalAsk } from '../modal/modalSlice';
import { resetForm, setForm } from '../form/formSlice';

interface Note extends Record<string, any> {
    title: string,
    body: string,
    date: number
}

export const startNewNote = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { uid } = getState().auth;
        const { notes } = getState().note;
        const { formState } = getState().form

        if (notes.length === 4) return toast('Version free, you can only have 4 notes!', { position: 'top-left', icon: '😞' });

        dispatch(savingNewNote());

        const newNote: Note = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote(newNote as any));

        if (isChangeActiveNote(notes, formState)) {
            dispatch(setNextNote(newNote as any))
            dispatch(openModalAsk());
            return;
        }

        dispatch(setActiveNote(newNote as any));

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


export const startAskSaveNote = (nextNote: NoteComplete) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        
        const { notes } = getState().note
        const { formState } = getState().form
        if (!formState) {
            
            dispatch(setActiveNote(nextNote));
            return;
        }

        if (isChangeActiveNote(notes, formState)) {
            dispatch(setNextNote(nextNote))
            dispatch(openModalAsk());
            return;
        }

        dispatch(setActiveNote(nextNote));
    }
}

const isChangeActiveNote = (notes: NoteComplete[], active: NoteComplete | null) => {
    if (!active) return false;
    const noteSearch = notes.find(item => item.id === active.id);

    const isChangeBody = noteSearch?.body?.trim() !== active.body?.trim();
    const isChangeTitle = noteSearch?.title?.trim() !== active.title?.trim();

    return isChangeBody || isChangeTitle
}

export const startSaveNote = (imagesList?: File[]) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { uid } = getState().auth;
        const { active: note, nextNote } = getState().note;
        const { formState } = getState().form

        let imageUrls: string[] = [];

        if (imagesList) {

            if (note?.imageUrls && note.imageUrls.length === 3) return toast('Only 3 images by note in version Free', { icon: '😥' });

            dispatch(setSaving());
            const fileUploadPromises = []
            for (const file of imagesList) {
                fileUploadPromises.push(fileUpload(file))
            }
            imageUrls = await Promise.all(fileUploadPromises);
        }

        dispatch(setSaving());
        let newNote: NoteComplete = {
            ...note!,
            ...(formState ? { ...formState } : {}),
            imageUrls: [...imageUrls, ...(note && note?.imageUrls ? [...note.imageUrls] : [])]
        }

        if (note) {

            const { id, ...noteToFireStore } = newNote;

            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
            await setDoc(docRef, noteToFireStore, { merge: true });

            dispatch(updateNote(newNote));
            dispatch(setActiveNote(nextNote ? nextNote : newNote));
            
            toast.success('Note updated successfully! ✅', { position: 'bottom-right' })
        }
    }
}


export const startDeletingImage = (url: string) => {
    return async (dispatch: Dispatch, getState: () => RootState) => {
        
        const { uid } = getState().auth;
        const { active: note } = getState().note;
        
        if (note) {
            dispatch(setSaving())

            const imageUrls = note.imageUrls?.filter(img => img !== url);
            const newNote ={
                ...note,
                imageUrls
            }
            

            const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note!.id}`);
            await setDoc(docRef, newNote, { merge: true });

            toast.success('Image deleted successfully')

            dispatch(updateNote(newNote));
            dispatch(setActiveNote(newNote));
        }
    }
}

export const startDeletingNote = () => {
    return async (dispatch: Dispatch, getState: () => RootState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().note;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note!.id}`);
        await deleteDoc(docRef);

        toast.success('Note deleted successfully')
        dispatch(resetForm())
        dispatch(deleteNoteById(note!.id));
    }
}
