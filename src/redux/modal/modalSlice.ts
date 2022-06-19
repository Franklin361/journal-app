import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalImageState {
    isOpen:boolean;
    image: string;
    type: 'image' | 'ask'
}

type ModalAction = { image: string };

const initialState: ModalImageState = {
  image: '',
  isOpen: false,
  type:'image'
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
        state.type = 'image';
    },
    openModalAsk: (state) => {
      state.isOpen = true;
      state.type = 'ask'
    },
  },
})

export const { onCloseModal, onOpenModal, openModalAsk } = modalImageSlice.actions

export default modalImageSlice.reducer