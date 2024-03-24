import { AccountPage } from 'pages/AccountPage';
import { InfographicsPage } from 'pages/InfographicsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { FacilityPage } from 'pages/FacilityPage';
import { TestPage } from 'pages/TestPage';
import { AppRoutesProps } from './types';
import { getFacility, getMain, getNotFound } from 'app/providers/router/routeConfig/routes';


export enum AppRoutes {
  INFOGRAPHICS = 'infographics',
  ACCOUNT = 'account',
  FACILITY = 'facility',
  TEST = 'test',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.INFOGRAPHICS]: 'factory/:factoryId/facility/:facilityId/infographics',
  [AppRoutes.ACCOUNT]: 'account',
  [AppRoutes.FACILITY]: ':factoryId/facility_ID/:facilityId',
  [AppRoutes.TEST]: 'test',
  [AppRoutes.MAIN]: getMain(),
  [AppRoutes.NOT_FOUND]: getNotFound(),
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <AccountPage />,
  },
  [AppRoutes.INFOGRAPHICS]: {
    path: RoutePath.infographics,
    element: <InfographicsPage />,
  },
  [AppRoutes.FACILITY]: {
    path: RoutePath.facility,
    element: <FacilityPage />,
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <TestPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <p>main</p>,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
