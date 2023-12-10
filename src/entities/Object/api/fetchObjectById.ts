import { createAsyncThunk } from '@reduxjs/toolkit';
import { IObject } from '../model/types/object';
import { ThunkConfig } from 'app/providers/StoreProvider';

// 1 аргумент - тип ВОЗВРАЩАЕМОГО результата - response.data
// 2 аргумент в данном случае string, потому что как аргумент в fetchObjectById передается objectId, который string
// 3 аргумент это тип ошибки, то есть то, что передается в rejectWithValue
export const fetchObjectById = createAsyncThunk<IObject, string, ThunkConfig<string>>(
  'fetchObjectById',
  // здесь objectId и есть аргумент, который передали в fetchObjectById
  async (objectId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<IObject>(`/facility/${objectId}`);

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
