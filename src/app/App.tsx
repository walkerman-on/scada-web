import "./styles/index.scss";
import { Page } from "widgets/Page/ui/Page";

const App = () => {
    return (
        <Page />
        // <Suspense fallback = {<PageLoader />}>
        //     <Routes>
        //     <Route 
        //             path='/'
        //             element = {<Page />}
        //         />
        //         <Route 
        //             path = {getLogin()} 
        //             element = {<LoginPage />}
        //         />
        //         <Route 
        //             path = {getRegister()} 
        //             element = {<RegisterPage />}
        //         />
     
        //     </Routes>
        // </Suspense>
    );
};

export default App;