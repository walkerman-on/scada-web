import { Navigate } from "react-router-dom";
import { useAuth } from "entities/Auth/hooks/useAuth";
import { Button } from "shared/ui/Button/Button";
import {deleteUser} from "entities/Auth/model/slice/userSlice"
import { useAppDispatch } from "entities/Auth/hooks/auth-hooks";
const AccountPage = () => {
 const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch();

    return isAuth ? (
          <div>
            <p style = {{fontWeight: "700"}}>Личный кабинет диспетчера</p>
            <Button onClick = {() => dispatch(deleteUser())}>Выйти из профиля {email}</Button>
        </div>
    ) : (
         <Navigate to = '/login'/>
    )
};

export default AccountPage;