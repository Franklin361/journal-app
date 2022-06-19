import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from '../../interfaces';

interface FormState {
    formState: Note | null
}

const initialState: FormState = {
    formState: null
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<Note>) => {
            state.formState = action.payload;
        },
        resetForm: (state )=> {
            state.formState = null
        }
    }
});

export const {setForm ,resetForm} = formSlice.actions;

export default formSlice.reducer