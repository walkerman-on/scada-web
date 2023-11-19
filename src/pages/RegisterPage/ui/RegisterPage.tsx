import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "entities/Auth/model/slice/userSlice";
import { useNavigate } from "react-router-dom";
import AuthForm from "widgets/AuthForm/AuthForm";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const RegisterPage = () => {
   const dispatch = useAppDispatch();
   const navigate = useNavigate()

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
        <AuthForm title='Зарегистрироваться' handleClick={handleSignUp}/>
    );
};

export default RegisterPage;