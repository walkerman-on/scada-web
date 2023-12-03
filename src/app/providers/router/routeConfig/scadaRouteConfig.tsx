import { AccountPage } from 'pages/AccountPage';
import { InfographicsPage } from 'pages/InfographicsPage';
import { ObjectPage } from 'pages/ObjectPage';
import { TestPage } from 'pages/TestPage';
import { AppRoutesProps } from './types';
import { getMain, getNotFound } from 'app/providers/router/routeConfig/routes';
import { NotFoundPageScada } from 'pages/NotFoundPageScada';

export enum AppRoutes {
  INFOGRAPHICS = 'infographics',
  ACCOUNT = 'account',
  OBJECT = 'object',
  TEST = 'test',
  MAIN = 'main',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.INFOGRAPHICS]: 'infographics',
  [AppRoutes.ACCOUNT]: 'account',
  [AppRoutes.OBJECT]: 'object/:id',
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
  [AppRoutes.OBJECT]: {
    path: RoutePath.object,
    element: <ObjectPage />,
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
    element: <NotFoundPageScada />,
  },
};
