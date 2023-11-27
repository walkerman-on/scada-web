import AuthForm from "widgets/AuthForm/AuthForm";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useSignUp } from "entities/Auth/hooks/useSignUp";

const RegisterPage = () => {
   const { theme } = useTheme();
   const {signUp} = useSignUp();

    return (
        <div className={classNames("app auth-container", {}, [theme])}>
            <AuthForm title='Регистрация' handleClick={signUp}/>
        </div>
    );
};

export default RegisterPage;