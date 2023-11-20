import { AccountPage } from "pages/AccountPage"
import { InfographicsPage } from "pages/InfographicsPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ObjectPage } from "pages/ObjectPage"
import { TestPage } from "pages/TestPage"
import { RouteProps } from "react-router-dom"

export const getLogin = () => '/login'
export const getRegister = () => '/register'

export enum AppRoutes {
    INFOGRAPHICS = "infographics",
    ACCOUNT = "account",
    OBJECT = "object",
    TEST = "test",
    MAIN = "main",
    NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.INFOGRAPHICS]: "/infographics",
    [AppRoutes.ACCOUNT]: "/account",
    [AppRoutes.OBJECT]: "/object/:id",
    [AppRoutes.TEST]: "/test",
    [AppRoutes.MAIN]: "/",
    [AppRoutes.NOT_FOUND]: "*",
}

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.ACCOUNT]: {
        path: RoutePath.account,
        element: <AccountPage/>,
    },
    [AppRoutes.INFOGRAPHICS]: {
        path: RoutePath.infographics,
        element: <InfographicsPage/>,
        authOnly: true,
    },
    [AppRoutes.OBJECT]: {
        path: RoutePath.object,
        element: <ObjectPage/>,
        authOnly: true,
    },
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <TestPage/>,
        authOnly: true,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}






