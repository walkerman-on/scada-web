import cl from "./RegisterPage.module.scss"
import { useDispatch } from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {setUser} from "entities/Auth/model/slice/userSlice"

import AuthForm from "widgets/AuthForm/AuthForm";

const RegisterPage = () => {
   const dispatch = useDispatch();

    const handleSignUp = (email:string, password:string) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                }))
            })
            .catch(console.error)
    }

    return (
        <AuthForm title='Зарегистрироваться' handleClick={handleSignUp}/>
    );
};

export default RegisterPage;