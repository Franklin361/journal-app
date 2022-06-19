import { configureStore } from '@reduxjs/toolkit'
import modalImageReducer from './modal/modalSlice'
import authReducer from './auth/authSlice'
import noteReducer from './note/noteSlice'
import formReducer from './form/formSlice'
import sidebarReducer from './sidebar/sidebarSlice'


export const store = configureStore({
  reducer: {
    modalImage: modalImageReducer,
    auth: authReducer,
    note: noteReducer,
    form: formReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch