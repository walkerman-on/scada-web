import cl from "./RegisterPage.module.scss"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {setUser} from "entities/Auth/model/slice/userSlice"
import { useNavigate } from "react-router-dom";
import AuthForm from "widgets/AuthForm/AuthForm";
import { useAppDispatch } from "entities/Auth/hooks/auth-hooks";

const RegisterPage = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate()

    const handleSignUp = (email:string, password:string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }));
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <AuthForm title='Зарегистрироваться' handleClick={handleSignUp}/>
    );
};

export default RegisterPage;