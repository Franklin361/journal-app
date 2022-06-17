import { configureStore } from '@reduxjs/toolkit'
import modalImageReducer from './modal/modalSlice'
import uploadImageReducer from './uploadImage/uploadImageSlice'


export const store = configureStore({
  reducer: {
      modalImage: modalImageReducer,
      uploadImage: uploadImageReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({  serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch