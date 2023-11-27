import { Button } from "shared/ui/Button/Button";
import { useLogout } from "entities/Auth/hooks/useLogout";

const MainPage = () => {
    const {logout, user} = useLogout();
    
    return (
        <div>
            <p style = {{fontWeight: "700"}}>Выбор завода</p>
            <Button onClick = {logout}>Выйти из профиля {user?.email}</Button>
        </div>
    )
};

export default MainPage;