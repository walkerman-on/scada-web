import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer, loginReducer } from 'entities/Auth/index';
import {factoryReducer} from "entities/Factory/index"
import { facilityReducer } from 'entities/Facility';
import { parameterReducer } from 'entities/TechnologicalParameters';
import {valveReducer} from 'entities/Valve';

export const store = configureStore({
  reducer: {
    user: userReducer,
    factory: factoryReducer,
    facility: facilityReducer,
    parameter: parameterReducer,
    valve: valveReducer,
    login: loginReducer
  },
});