import { lazy } from 'react';

export const FacilityPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./FacilityPage')), 1500)
}));