import { lazy } from 'react';

export const AccountPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AccountPage')), 1500)
}));
