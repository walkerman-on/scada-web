import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IManufactory } from '../model/types/manufactory';

export const fetchManufactories = createAsyncThunk<IManufactory[], void, ThunkConfig<string>>(
  'fetchManufactories',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IManufactory[]>(`/manufactory`);
      // const response = await $api.get<IManufactory[]>(`/manufactory`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
