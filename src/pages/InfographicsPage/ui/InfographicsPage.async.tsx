import { lazy } from 'react';

export const InfographicsPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./InfographicsPage')), 1500)
}));
