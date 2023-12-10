import { configureStore, CombinedState, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'entities/Auth';
import { objectReducer } from 'entities/Object';
import { StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider/config/types';
import { manufactoryReducer } from 'entities/Manufactory';
import { $api } from 'shared/API/api';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    objects: objectReducer,
    manufactory: manufactoryReducer,
  };

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: combineReducers(rootReducers) as Reducer<CombinedState<StateSchema>>,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
    // сейчас это не надо, можно сюда не смотреть
    preloadedState: initialState,
  });

  return store;
}

export const store = createReduxStore();
