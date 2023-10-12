import {Suspense} from "react"
import {Routes, Route, Link} from "react-router-dom"
import "./styles/index.scss"
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";



const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div style = {{display: "flex", gap: "10px"}} className={classNames("app", {}, [theme])}>
            <Link to = {"/object"}>Объект</Link>
            <Link to = {"/infographics"} >Инфографика</Link>
            <Link to = {"/test"} >Тестирование</Link>
            <Link to = {"/account"} >Аккаунт</Link>
            <button style={{background: "white", padding: "5px"}} onClick={changeTheme}>Theme toggle</button>
            <AppRouter/>
        </div>
    );
};

export default App;