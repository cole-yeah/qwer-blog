import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { RootState } from 'types';

const selectDomain = (state: RootState) => state.counter || initialState;

export const selectCounter = createSelector(
  [selectDomain],
  counterState => counterState.counter,
);

export const selectState = createSelector(
  [selectDomain],
  counterState => counterState.state,
);
