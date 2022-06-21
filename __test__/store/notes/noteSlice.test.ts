import { demoNote, initialState } from "../../fixtures/noteFixture";
import {
    addNewEmptyNote, clearNotesLogout, deleteNoteById, noteSlice,
    setActiveNote,
    setNextNote,
    setNotes,
    setPhotosToActiveNote,
    setSaving,
    updateNote

} from '../../../src/redux/note/noteSlice';

describe.skip('📂 noteSlice.ts', () => {
    test('🟣 Should return initial state and be called "note"', () => {
        const state = noteSlice.reducer(initialState, {} as any);

        expect(state).toEqual(initialState);
        expect(noteSlice.name).toBe('note');
    });

    test('🟣 Should add a empty new note in state', async () => {
        const state = noteSlice.reducer(initialState, addNewEmptyNote(demoNote));
        expect(state.notes).toEqual([demoNote]);
        expect(state.notes.length).toBe(1);
    });

    test('🟣 Should set value true to saving new note', async () => {
        const state = noteSlice.reducer(initialState, setSaving());
        expect(state.isSaving).toBeTruthy();
    });

    test('🟣 Should set next note', async () => {
        const state = noteSlice.reducer(initialState, setNextNote(demoNote));
        expect(state.nextNote).toEqual(demoNote);
    });

    test('🟣 Should activate a note', async () => {
        const state = noteSlice.reducer(initialState, setActiveNote(demoNote));
        expect(state.active).toEqual(demoNote);
    });

    test('🟣 Should state have 2 notes', async () => {
        const state = noteSlice.reducer(initialState, setNotes([demoNote, demoNote]));
        expect(state.notes.length).toBe(2);
        expect(state.notes).toEqual([demoNote, demoNote]);
    });

    test('🟣 Should upadate note', async () => {
        initialState.notes = [demoNote];
        const updateThisNote = {
            ...demoNote,
            body: 'This was updated'
        }
        const state = noteSlice.reducer(initialState, updateNote(updateThisNote));
        expect(state.notes.length).toBe(1);
        expect(state.notes[0].body).toBe(updateThisNote.body);
        expect(state.notes).toEqual([updateThisNote]);
    });

    test('🟣 Should set photos to active note', async () => {
        initialState.active = demoNote;
        const photos = ['url1', 'url2'];
        const state = noteSlice.reducer(initialState, setPhotosToActiveNote(photos));
        if (state.active && state.active.imageUrls) {
            const totalPhotos = demoNote.imageUrls.length + photos.length
            expect(state?.active?.imageUrls?.length).toBe(totalPhotos);
            expect(state?.active?.imageUrls).toEqual([...demoNote.imageUrls, ...photos]);
        }
    });

    test('🟣 Should clear all notes after log out', async () => {
        initialState.active = demoNote;
        const state = noteSlice.reducer(initialState, clearNotesLogout());
        expect(state).toEqual({
            isSaving: false,
            notes: [],
            active: null,
            nextNote: null
        });
    });

    test('🟣 Should delete note by ID', async () => {
        initialState.active = demoNote;
        const state = noteSlice.reducer(initialState, deleteNoteById(demoNote.id));

        expect(state).toEqual({
            active: null,
            notes: [],
            nextNote: null,
            isSaving: false
        })
    });


})