import { createSlice } from '@reduxjs/toolkit';
import { login } from 'entities/Auth/api/login';
import { LoginState } from '../types/login';

const initialState: LoginState = {
    token: ""
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.token = action.payload
                console.log(action.payload)
            })
            .addCase(login.pending, (state) => {
            })
            .addCase(login.rejected, (state, action) => {
            })
          }
});

export default loginSlice.reducer;
