import { Input } from "shared/ui/Input";
import cl from "./RegisterPage.module.scss"
import { Button } from "shared/ui/Button";
import AppLink from "shared/ui/AppLink/AppLink";

const RegisterPage = () => {
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
                <Input text="Пароль"/>
                <Button>Зарегистрироваться</Button>
        </div>
    );
};

export default RegisterPage;