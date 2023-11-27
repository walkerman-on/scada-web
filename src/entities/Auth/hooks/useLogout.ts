import { deleteUser } from "entities/Auth/model/slice/userSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getAuth, signOut } from "firebase/auth";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getUserSelector } from "entities/Auth/model/selectors/userSelector";
import { IUseLogoutReturn } from "./types";

export const useLogout = ():IUseLogoutReturn => {
    const { user } = useAppSelector(getUserSelector)
    const dispatch = useAppDispatch();
    
    const handleLogout = () => {
       const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(deleteUser())
        })
        .catch(() => alert("Ошибка!"));
    }

    return {logout: handleLogout, user: user}
}
