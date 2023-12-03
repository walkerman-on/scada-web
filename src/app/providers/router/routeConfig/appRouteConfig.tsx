import { LoginPage } from 'pages/LoginPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPageApp } from 'pages/NotFoundPageApp';
import { RegisterPage } from 'pages/RegisterPage';
import { Scada } from 'widgets/Scada'
import { AppRoutesProps } from './types';
import { getLogin, getNotFound, getRegister } from './routes';
import { getMain } from 'app/providers/router/routeConfig/routes';

export enum AppRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
  MAIN = 'main',
  SCADA = 'scada',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: getLogin(),
  [AppRoutes.REGISTER]: getRegister(),
  [AppRoutes.SCADA]: 'scada/*',
  [AppRoutes.MAIN]: getMain(),
  [AppRoutes.NOT_FOUND]: getNotFound(),
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
    element: <Scada />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPageApp />,
  },
};
