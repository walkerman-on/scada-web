import { FC, useCallback, useState } from "react";
import { Input } from "shared/ui/Input";
import cl from "./AuthForm.module.scss";
import { Button } from "shared/ui/Button";
import AppLink from "shared/ui/AppLink/AppLink";
import { Message } from "shared/ui/Message";

interface IForm {
    title: string,
    handleClick: (email: string, pass: string) => void
}

const AuthForm: FC<IForm> = ({title, handleClick}) => {
    const [userData, setUserData] = useState({login: '', password: ''})

    const onLoginHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserData((prev) => ({...prev, login: e.target.value}))
    }, [])

    const onPasswordHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserData((prev) => ({...prev, password: e.target.value}))
    }, [])

    const onBtnClick = useCallback((): void => {
        handleClick(userData.login, userData.password)
    }, [userData, handleClick])

    return (
        <div className={cl.Form}>
            <span className={cl.title}>Личный кабинет</span>
            <section className = {cl.auth}>
                  <div className={cl.titleSection}>
                <AppLink to='/login'>
                    <span className={cl.text}>Вход</span>
                </AppLink>
                <AppLink to='/register'>
                    <span className={cl.text}>Регистрация</span>
                </AppLink>
            </div>
            <section className={cl.input}>
                <Input 
                text="Логин"
                value = {userData.login}
                onChange = {onLoginHandle}
                size="large"
            />
            <Input 
                text="Пароль"
                type = "password"
                value = {userData.password}
                onChange = {onPasswordHandle}
                size="large"
            />
            </section>
            <AppLink to='/'>
            {/* <Message content={""} onClick = {onBtnClick}/> */}

                <Button 
                    type = "primary"
                    onClick={onBtnClick}
                >
                    {title}
                </Button>
            </AppLink>
            </section>
        </div>
    );
};

export default AuthForm;