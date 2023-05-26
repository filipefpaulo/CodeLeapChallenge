import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  modalState: 'idle' | 'delete' | 'edit';
}

const initialState: ModalState = {
  modalState: 'idle',
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openDeleteModal: (state) => {
      state.modalState = 'delete';
    },
    openEditModal: (state) => {
      state.modalState = 'edit';
    },
    closeModal: (state) => {
      state.modalState = 'idle';
    },
  },
});

export const { openDeleteModal, openEditModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
