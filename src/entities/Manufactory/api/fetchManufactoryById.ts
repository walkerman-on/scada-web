import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { IManufactory } from 'entities/Manufactory/model/types/manufactory';

export const fetchManufactoryById = createAsyncThunk<IManufactory, string, ThunkConfig<string>>(
  'fetchManufactoryById',
  async (manufactoryId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IManufactory>(`/manufactory/${manufactoryId}`);

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
