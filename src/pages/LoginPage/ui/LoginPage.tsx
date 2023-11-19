import AuthForm from "widgets/AuthForm/AuthForm";
import { useLogin } from "entities/Auth/hooks/useLogin";
import { useTheme } from "app/providers/ThemeProvider";

const LoginPage = () => {
   const { login } = useLogin() 
   const { theme } = useTheme()

    return (
        <AuthForm title='Войти' handleClick={login}/>
    );
};

export default LoginPage;