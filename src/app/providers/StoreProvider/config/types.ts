import { UserSchema } from 'entities/Auth';
import { createReduxStore, store } from './store';

import { AxiosInstance } from 'axios';
import { ObjectSchema } from 'entities/Object/model/types/object';
import { ManufactorySchema } from 'entities/Manufactory';

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];

export type RootState = ReturnType<typeof store.getState>;

export interface StateSchema {
  user: UserSchema;
  objects: ObjectSchema;
  manufactory: ManufactorySchema;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
