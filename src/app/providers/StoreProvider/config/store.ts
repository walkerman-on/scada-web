import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/Auth/index';
import {factoryReducer} from "entities/Factory/index"
import { facilityReducer } from 'entities/Facility';

export const store = configureStore({
  reducer: {
    user: userReducer,
    factory: factoryReducer,
    facility: facilityReducer
  },
});
