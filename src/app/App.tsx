import { Suspense } from "react";
import "./styles/index.scss";
import { Page } from "widgets/Page/ui/Page";
import { PageLoader } from "widgets/PageLoader/ui/PageLoader";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "pages/LoginPage";
import { RegisterPage } from "pages/RegisterPage";
import { getLogin, getRegister } from "./providers/router/routeConfig/routeConfig";

const App = () => {
    return (
        <Suspense fallback = {<PageLoader />}>
            <Routes>
                <Route 
                    path = {getLogin()} 
                    element = {<LoginPage />}
                />
                <Route 
                    path = {getRegister()} 
                    element = {<RegisterPage />}
                />
                <Route 
                    path='*'
                    element = {<Page />}
                />
            </Routes>
        </Suspense>
    );
};

export default App;