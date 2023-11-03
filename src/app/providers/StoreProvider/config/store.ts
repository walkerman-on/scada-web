import { configureStore } from '@reduxjs/toolkit'
import { StateScheme } from './StateScheme';

export function createReduxStore(initialState?: StateScheme) {
    return configureStore<StateScheme>({
        reducer: {},
        preloadedState: initialState,
    });
}
