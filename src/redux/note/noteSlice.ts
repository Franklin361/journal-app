import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NoteState } from '../../interfaces';

const initialState: NoteState = {
    isSaving: false,
    notes: [],
    active: null,
    nextNote: null
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {

        addNewEmptyNote: (state, action: PayloadAction<Note>) => {
            state.notes.unshift(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action: PayloadAction<Note>) => {
            state.active = action.payload;
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        setSaving: (state) => {
            state.isSaving = true;
        },
        updateNote: (state, action: PayloadAction<Note>) => {
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) return action.payload;
                return note;
            });
        },
        setPhotosToActiveNote: (state, action: PayloadAction<string[]>) => {
            state.active!.imageUrls = state.active?.imageUrls ? [...state.active.imageUrls, ...action.payload] : []
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.notes = [];
            state.active = null;
        },
        deleteNoteById: (state, action: PayloadAction<string>) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.nextNote = null;
            state.isSaving = false;
        },
        setNextNote: (state, action: PayloadAction<Note | null>) => {
            state.nextNote = action.payload;
        },
    }
});

export const {
    addNewEmptyNote,
    clearNotesLogout,
    setNextNote,
    deleteNoteById,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote } = noteSlice.actions;

export default noteSlice.reducer