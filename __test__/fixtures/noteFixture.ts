import { NoteState } from '../../src/interfaces/note';

export const initialState: NoteState = {
    isSaving: false,
    notes: [],
    active: null,
    nextNote: null
}

export const demoNote = {
    id: '123',
    date: new Date().getTime(),
    title: '',
    body: '',
    imageUrls:['url']
}