import {FC, useState} from "react"
import { Input } from "shared/ui/Input";
import cl from "./AuthForm.module.scss"
import { Button } from "shared/ui/Button";
import AppLink from "shared/ui/AppLink/AppLink";

interface IForm {
    title: string,
    handleClick: (email: string, pass: string) => void
}

const AuthForm: FC<IForm> = ({title, handleClick}) => {
    const [userData, setUserData] = useState({login: '', password: ''})
    console.log(userData)

    return (
        <div className={cl.Form}>
            <span className={cl.title}>Личный кабинет</span>
            <div className={cl.titleSection}>
                <AppLink to='/login'>
                    <span>Вход</span>
                </AppLink>
                <AppLink to='/register'>
                    <span>Регистрация</span>
                </AppLink>
            </div>
            <Input 
                text="Логин"
                value = {userData.login}
                onChange = {(e) => setUserData({...userData, login: e.target.value})}
            />
            <Input 
                text="Пароль"
                type = "password"
                value = {userData.password}
                onChange = {(e) => setUserData({...userData, password: e.target.value})}
            />
            <AppLink to='/'>
                <Button 
                    type = "primary"
                    onClick={() => handleClick(userData.login, userData.password)}
                >
                    {title}
                </Button>
            </AppLink>
        </div>
    );
};

export default AuthForm;