import { configureStore } from '@reduxjs/toolkit';
import gameQueryReducer from './gameQuerySlice';

export const store = configureStore({
  reducer: {
    gameQuery: gameQueryReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
