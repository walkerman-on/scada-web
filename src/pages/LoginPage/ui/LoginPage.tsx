import cl from "./LoginPage.module.scss"
import AuthForm from "widgets/AuthForm/AuthForm";
import { useDispatch } from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from "entities/Auth/model/slice/userSlice"

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = (email:string, password:string) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)

    }

    return (
        <AuthForm title='Войти' handleClick={handleLogin}/>
    );
};

export default LoginPage;