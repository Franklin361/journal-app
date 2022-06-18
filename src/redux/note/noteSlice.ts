import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../../interfaces';

interface NoteState {
    isSaving: boolean;
    notes: Note[];
    active: Note | null;
}

const initialState: NoteState = {
    isSaving: false,
    notes: [],
    active: null
}

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        
        addNewEmptyNote: (state, action: PayloadAction<Note>) => {
            state.notes.unshift(action.payload);
            state.isSaving = false;
        },
        
        setActiveNote: (state, action:PayloadAction<Note>) => {
            state.active = action.payload;
        },
        
        setNotes: (state, action:PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        
        setSaving: (state) => {
            state.isSaving = true;
        },

        updateNote: (state, action: PayloadAction<Note>) => { // payload: note
            state.isSaving = false;
            state.notes = state.notes.map(note => {

                if (note.id === action.payload.id) {
                    return action.payload;
                }

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

        deleteNoteById: (state, action:PayloadAction<string>) => {
            state.active = null;
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
    }
});

export const { 
    addNewEmptyNote,
    clearNotesLogout,
    deleteNoteById,
    savingNewNote,
    setActiveNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote } = noteSlice.actions;

export default noteSlice.reducer