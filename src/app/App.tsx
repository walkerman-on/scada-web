import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { Header } from "widgets/Header";

const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
                <Sidebar/>
            <div>
                <Header/>
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;