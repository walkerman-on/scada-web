import AuthForm from "widgets/AuthForm/AuthForm";
import { useLogin } from "entities/Auth/hooks/useLogin";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from 'shared/lib/classNames/classNames';

const LoginPage = () => {
   const { login } = useLogin() 
   const { theme } = useTheme()

    return (
        <div className={classNames("app auth-container", {}, [theme])}>
            <AuthForm title='Войти' handleClick={login}/>
        </div>
    );
};

export default LoginPage;