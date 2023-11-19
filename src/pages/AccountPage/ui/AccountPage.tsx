import { Navigate } from "react-router-dom";
import { useAuth } from "entities/Auth/hooks/useAuth";
import { Button } from "shared/ui/Button/Button";
import { deleteUser } from "entities/Auth/model/slice/userSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const AccountPage = () => {
 const { isAuth, user } = useAuth()
    const dispatch = useAppDispatch();

    // TODO: useLogout
    const onHandleDelete = () => {
        console.log('onHandleDelete')
        dispatch(deleteUser())
    }

    return isAuth ? (
          <div>
            <p style = {{fontWeight: "700"}}>Личный кабинет диспетчера</p>
            <Button onClick = {onHandleDelete}>Выйти из профиля {user.email}</Button>
        </div>
    ) : (
         <Navigate to = '/login'/>
    )
};

export default AccountPage;