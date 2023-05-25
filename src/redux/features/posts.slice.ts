import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getPosts } from '../../actions/codeLeapAPI';
import { PostInterface } from '../../interfaces/post.interface';

interface PostState {
  loading: boolean;
  error: string | null;
  posts: Array<PostInterface> | null;
  nextPage: string | null;
}

const initialState: PostState = {
  loading: false,
  error: null,
  posts: null,
  nextPage: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.results;
        state.nextPage = action.payload.next;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const postsReducer = postsSlice.reducer;