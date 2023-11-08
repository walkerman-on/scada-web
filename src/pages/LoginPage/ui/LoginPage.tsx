import { Input } from "shared/ui/Input";
import cl from "./LoginPage.module.scss"
import { Button } from "shared/ui/Button";
import AppLink from "shared/ui/AppLink/AppLink";

const LoginPage = () => {
    return (
        <div className={cl.LoginPage}>
            <span style = {{fontWeight: "700"}}>Личный кабинет</span>
            <div className={cl.titleSection}>
                <AppLink to='/login'>
                    <span >Вход</span>
                </AppLink>
                <AppLink to='/register'>
                <span >Регистрация</span>

                </AppLink>
            </div>
                <Input text="Логин"/>
                <Input type="password" text="Пароль"/>
                <AppLink to='/'>
                    <Button>Войти</Button>
                </AppLink>
        </div>
    );
};

export default LoginPage;