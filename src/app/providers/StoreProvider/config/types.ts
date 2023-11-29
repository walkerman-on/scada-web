import { UserSchema } from 'entities/Auth';
import { store } from './store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export interface StateSchema {
  user: UserSchema;
}
