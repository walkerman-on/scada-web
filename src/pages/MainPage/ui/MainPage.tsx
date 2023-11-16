import { Navigate } from "react-router-dom";
import { useAuth } from "entities/Auth/hooks/useAuth";
import { Button } from "shared/ui/Button/Button";
import {deleteUser} from "entities/Auth/model/slice/userSlice"
import { useAppDispatch } from "entities/Auth/hooks/auth-hooks";

const MainPage = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useAppDispatch();

    return isAuth ? (
          <div>
            <p style = {{fontWeight: "700"}}>Выбор завода</p>
            <Button onClick = {() => dispatch(deleteUser())}>Выйти из профиля {email}</Button>
        </div>
    ) : (
         <Navigate to = '/login'/>
    )
};

export default MainPage;