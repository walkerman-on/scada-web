import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from 'entities/Auth/index';
import {factoryReducer} from "entities/Factory/index"
import { facilityReducer } from 'entities/Facility';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducers = combineReducers({
  user: userReducer,
  factory: factoryReducer,
  facility: facilityReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
