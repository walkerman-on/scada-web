import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ObjectSchema } from '../types/object';
import { fetchObjects } from 'entities/Object/api/fetchObjects';
import { IObject } from '../types/object';
import { fetchObjectById } from 'entities/Object/api/fetchObjectById';

const initialState: ObjectSchema = {
  isLoading: false,
  error: undefined,
  list: undefined,
  object: undefined,
};

export const objectSlice = createSlice({
  name: 'object',
  initialState,
  reducers: {
    setFacilityById(state: ObjectSchema, { payload }: PayloadAction<string>) {
      state.object = state.list?.find((elem) => elem.id === +payload) ?? undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchObjects.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchObjects.fulfilled, (state, action: PayloadAction<IObject[]>) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchObjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchObjectById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchObjectById.fulfilled, (state, action: PayloadAction<IObject>) => {
        state.isLoading = false;
        state.object = action.payload;
      })
      .addCase(fetchObjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // .addCase(fetchFacilitiesByManufactoryId.pending, (state, action) => {
    // state.error = undefined;
    // state.isLoading = true;
    // }),
    // .addCase(fetchFacilitiesByManufactoryId.fulfilled, (state, action: PayloadAction<IObject[]>) => {
    //   state.isLoading = false;
    //   state.list = action.payload;
    // }),
    // .addCase(fetchFacilitiesByManufactoryId.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // });
  },
});

export const { actions: objectActions } = objectSlice;
export default objectSlice.reducer;
