import { Route, Routes } from "react-router-dom";
import { routeConfig } from "app/providers/router/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";
import { Suspense } from "react";

const AppRouter = () => {
    return (
        <Suspense fallback = {<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({element, path, authOnly }) => (
                    <Route 
                        key = {path} 
                        path = {path} 
                        element = {authOnly ? (
                            // TODO: разобраться с типами ReactNode и JSX.Element
                            <RequireAuth>{element as JSX.Element}</RequireAuth>
                        ) : (
                            element
                        )}
                    />
                ))}
         </Routes>
        </Suspense>
    );
};

export default AppRouter;