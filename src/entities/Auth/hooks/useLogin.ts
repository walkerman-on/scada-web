import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { setUser } from "../model/slice/userSlice";

export interface IUseLoginReturn {
  login: (email: string, password: string) => void;
}

export const useLogin = (): IUseLoginReturn => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate("/");
      })
      .catch(() => alert("Несуществующий пользователь!"));
  };

  return { login: handleLogin };
};
