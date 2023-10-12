import { lazy } from 'react';

export const ObjectPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ObjectPage')), 1500)
}));