import {Suspense} from "react"
import {Routes, Route} from "react-router-dom"
import { routeConfig } from "app/providers/router/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <Suspense fallback = {<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path }) => (
                    <Route key = {path} path = {path} element = {element}/>
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;