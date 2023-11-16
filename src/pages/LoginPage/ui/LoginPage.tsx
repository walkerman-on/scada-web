import cl from "./LoginPage.module.scss"
import AuthForm from "widgets/AuthForm/AuthForm";
import { useNavigate } from "react-router-dom";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from "entities/Auth/model/slice/userSlice"
import { useAppDispatch } from "entities/Auth/hooks/auth-hooks";

const LoginPage = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate()

    const handleLogin = (email:string, password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate('/')
            })
            .catch(() => alert('Несуществующий пользователь!'))
    }

    return (
        <AuthForm title='Войти' handleClick={handleLogin}/>
    );
};

export default LoginPage;