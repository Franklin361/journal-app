import { configureStore } from '@reduxjs/toolkit'
import modalImageReducer from './modal/modalSlice'
import uploadImageReducer from './uploadImage/uploadImageSlice'
import authReducer from './auth/authSlice'
import noteReducer from './note/noteSlice'


export const store = configureStore({
  reducer: {
    modalImage: modalImageReducer,
    uploadImage: uploadImageReducer,
    auth: authReducer,
    note: noteReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch