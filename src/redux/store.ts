import { configureStore } from '@reduxjs/toolkit';

import { postsReducer } from './features/posts.slice';
import { usernameReducer } from './features/username.slice';

export const store = configureStore({
  reducer: {
    username: usernameReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
