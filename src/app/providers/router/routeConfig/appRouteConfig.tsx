import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Page } from 'widgets/Page/ui/Page';
import { AppRoutesProps } from './types';
import { getLogin, getNotFound, getRegister } from './routes';
import { getMain } from 'app/providers/router/routeConfig/routes';
import { AccountPage } from 'pages/AccountPage';

export enum AppRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
  ACCOUNT = 'account',
  MAIN = 'main',
  SCADA = 'scada',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: getLogin(),
  [AppRoutes.REGISTER]: getRegister(),
  [AppRoutes.SCADA]: '/*',
  [AppRoutes.MAIN]: getMain(),
  [AppRoutes.NOT_FOUND]: getNotFound(),
  [AppRoutes.ACCOUNT]: 'account/user/:userId',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.SCADA]: {
    path: RoutePath.scada,
    element: <Page />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
   [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <AccountPage />,
  },
};
