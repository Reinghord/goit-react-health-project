import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: { toggleModal: (_, action) => action.payload },
});

export const { toggleModal } = modalSlice.actions;
