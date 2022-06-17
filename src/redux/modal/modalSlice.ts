import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalImageState {
    isOpen:boolean;
    image: string;
}

type ModalAction = { image: string };

const initialState: ModalImageState = {
  image: '',
  isOpen: false
}

export const modalImageSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {

    onOpenModal: (state, action: PayloadAction<ModalAction>) => {
      state.isOpen = true;
      state.image = action.payload.image
    },
    onCloseModal: (state)=>{
        state.isOpen = false;
        state.image = '';
    }
  },
})

export const { onCloseModal, onOpenModal } = modalImageSlice.actions

export default modalImageSlice.reducer