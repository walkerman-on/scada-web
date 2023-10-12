import { AccountPage } from "pages/AccountPage"
import { InfographicsPage } from "pages/InfographicsPage"
import { LoginPage } from "pages/LoginPage"
import { ObjectPage } from "pages/ObjectPage"
import { TestPage } from "pages/TestPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    INFOGRAPHICS = "infographics",
    ACCOUNT = "account",
    LOGIN = "login",
    OBJECT = "object",
    TEST = "test"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.INFOGRAPHICS]: "/infographics",
    [AppRoutes.ACCOUNT]: "/account",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.OBJECT]: "/object",
    [AppRoutes.TEST]: "/test",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.ACCOUNT]: {
        path: RoutePath.account,
        element: <AccountPage/>
    },
    [AppRoutes.INFOGRAPHICS]: {
        path: RoutePath.infographics,
        element: <InfographicsPage/>
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    },
    [AppRoutes.OBJECT]: {
        path: RoutePath.object,
        element: <ObjectPage/>
    },
    [AppRoutes.TEST]: {
        path: RoutePath.test,
        element: <TestPage/>
    }
}






