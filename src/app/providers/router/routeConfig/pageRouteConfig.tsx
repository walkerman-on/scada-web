import { AccountPage } from 'pages/AccountPage';
import { InfographicsPage } from 'pages/InfographicsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { FacilityPage } from 'pages/FacilityPage';
import { TestPage } from 'pages/TestPage';
import { AppRoutesProps } from './types';
import { getMain, getNotFound } from 'app/providers/router/routeConfig/routes';


export enum AppRoutes {
  INFOGRAPHICS = 'infographics',
  ACCOUNT = 'user',
  FACILITY = 'facility',
  TEST = 'description',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.INFOGRAPHICS]: ':factoryKey/facility_ID/:facilityId/infographics',
  [AppRoutes.ACCOUNT]: 'user/:userId',
  [AppRoutes.FACILITY]: ':factoryKey/facility_ID/:facilityId',
  [AppRoutes.TEST]: ':factoryKey/facility_ID/:facilityId/description',
  [AppRoutes.MAIN]: getMain(),
  [AppRoutes.NOT_FOUND]: getNotFound(),
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.user,
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
    path: RoutePath.description,
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
