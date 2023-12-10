import { createAsyncThunk } from '@reduxjs/toolkit';
import { IObject } from '../model/types/object';
import { ThunkConfig } from 'app/providers/StoreProvider';

// 1 аргумент - тип ВОЗВРАЩАЕМОГО результата - response.data
// 2 аргумент в данном случае void, потому что как аргумент в fetchObjects ничего не передается
// 3 аргумент это тип ошибки, то есть то, что передается в rejectWithValue
export const fetchObjects = createAsyncThunk<IObject[], void, ThunkConfig<string>>(
  'fetchObjects',
  // здесь нет 1 аргумента, поскольку как аргумент в fetchObjects ничего не передается
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IObject[]>(`/facility`);

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
