import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IManufactory, ManufactorySchema } from '../types/manufactory';
import { fetchManufactories } from 'entities/Manufactory/api/fetchManufactories';
import { fetchManufactoryById } from 'entities/Manufactory/api/fetchManufactoryById';

const initialState: ManufactorySchema = {
  isLoading: false,
  error: undefined,
  list: undefined,
  object: undefined,
};

export const manufactorySlice = createSlice({
  name: 'manufactory',
  initialState,
  reducers: {
    // setManufactory(state: ManufactorySchema, { payload }: PayloadAction<IManufactory[]>) {
    //   state.list = payload;
    // },
    // setError(state: ManufactorySchema, { payload }: PayloadAction<string>) {
    //   state.error = payload;
    // },
    // setLoading(state: ManufactorySchema, { payload }: PayloadAction<boolean>) {
    //   state.isLoading = payload;
    // },
    setManufactoryById(state: ManufactorySchema, { payload }: PayloadAction<string>) {
      state.object = state.list?.find((elem) => elem.id === +payload) ?? undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchManufactories.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchManufactories.fulfilled, (state, action: PayloadAction<IManufactory[]>) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchManufactories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchManufactoryById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchManufactoryById.fulfilled, (state, action: PayloadAction<IManufactory>) => {
        state.isLoading = false;
        state.object = action.payload;
      })
      .addCase(fetchManufactoryById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: manufactoryActions } = manufactorySlice;
export default manufactorySlice.reducer;
