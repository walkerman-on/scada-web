import { lazy } from 'react';

export const TestPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./TestPage')), 1500)
}));