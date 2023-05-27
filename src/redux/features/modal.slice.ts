import { createSlice } from '@reduxjs/toolkit';

import { PostInterface } from '../../interfaces/post.interface';

interface ModalState {
  modalState: 'idle' | 'delete' | 'edit';
  post: Partial<PostInterface>;
}

const initialState: ModalState = {
  modalState: 'idle',
  post: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openDeleteModal: (state, actions) => {
      state.modalState = 'delete';
      state.post = { ...state.post, ...actions.payload };
    },
    openEditModal: (state, actions) => {
      state.modalState = 'edit';
      state.post = { ...state.post, ...actions.payload };
    },
    closeModal: (state) => {
      state.modalState = 'idle';
      state.post = {};
    },
  },
});

export const { openDeleteModal, openEditModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
