import { createSlice } from 'utils/@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { IFCounterState } from './types';

export const initialState: IFCounterState = {
  counter: 0,
  state: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementAsync(state) {
      state.state = true;
    },
    changeState(state, action: PayloadAction<boolean>) {
      state.state = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = counterSlice;
