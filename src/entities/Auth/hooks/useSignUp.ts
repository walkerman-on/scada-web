import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../model/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { IUseSignUpReturn } from "./types";

export const useSignUp = ():IUseSignUpReturn => { 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Введены некорректные данные!"));
    }

  return { signUp: handleSignUp };


}