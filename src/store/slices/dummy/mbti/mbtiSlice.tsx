//GetCurationCard, AddCurationCard..등에 사용되는 내용.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface IState {
  mbti: {
    test: boolean;
  };
}

export const initialState = {
  test: false,
};

const mbtiSlice = createSlice({
  name: 'mbti',
  initialState,
  reducers: {
    changeState: (state, action) => {
      state.test = true;
    },
  },
});

export const { changeState } = mbtiSlice.actions;

module.exports = mbtiSlice;