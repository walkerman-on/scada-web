import { Button } from "shared/ui/Button/Button";
import { deleteUser } from "entities/Auth/model/slice/userSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getAuth, signOut } from "firebase/auth";
import { useAppSelector } from "shared/lib/hooks/useAppSelector/useAppSelector";
import { getUserSelector } from "entities/Auth/model/selectors/userSelector";

const MainPage = () => {
    const { user } = useAppSelector(getUserSelector)
    const dispatch = useAppDispatch();

    // TODO: useLogout
    const handle = () => {
       const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(deleteUser())
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <p style = {{fontWeight: "700"}}>Выбор завода</p>
            <Button onClick = {handle}>Выйти из профиля {user?.email}</Button>
        </div>
    )
};

export default MainPage;