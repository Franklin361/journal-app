import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalImageState {
    isOpen:boolean;
    image: string;
    type: 'image' | 'ask'| 'delete'
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
    openModalDelete: (state) => {
      state.isOpen = true;
      state.type = 'delete'
    },
  },
})

export const { onCloseModal, onOpenModal, openModalAsk, openModalDelete } = modalImageSlice.actions

export default modalImageSlice.reducer