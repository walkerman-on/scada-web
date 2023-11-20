import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "entities/Auth/model/slice/userSlice";
import { useNavigate } from "react-router-dom";
import AuthForm from "widgets/AuthForm/AuthForm";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

const RegisterPage = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate()
   const { theme } = useTheme()

   // TODO: useSignup
    const handleSignUp = (email:string, password:string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    // token: user.refreshToken
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <div className={classNames("app", {}, [theme])}>
            <AuthForm title='Зарегистрироваться' handleClick={handleSignUp}/>
        </div>
    );
};

export default RegisterPage;