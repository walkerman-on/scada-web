import { lazy } from 'react';

export const LoginPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./LoginPage')), 1500)
}));