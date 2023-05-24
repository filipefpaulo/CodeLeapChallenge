import { createSlice } from '@reduxjs/toolkit';

interface UsernameState {
  username: string | null;
}

const initialState: UsernameState = {
  username: null,
};

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = usernameSlice.actions;
export const usernameReducer = usernameSlice.reducer;
