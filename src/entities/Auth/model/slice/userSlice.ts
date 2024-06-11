import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../types/user';

const initialState: UserState = {
  isAuthorized: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state: UserState, { payload }: PayloadAction<User>) {
      state.user = payload;
      state.isAuthorized = true;
    },
    deleteUser(state) {
      state.user = null;
      state.isAuthorized = false;
    },
  }
});

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
