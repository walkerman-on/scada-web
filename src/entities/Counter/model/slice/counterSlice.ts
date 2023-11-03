import { createSlice } from '@reduxjs/toolkit'
import { CounterScheme } from '../types/counterScheme';

const initialState: CounterScheme = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;

export default counterSlice.reducer