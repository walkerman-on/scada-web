import { Button } from "shared/ui/Button/Button";
import { useLogout } from "entities/Auth/hooks/useLogout";
import { Message } from "shared/ui/Message";

const MainPage = () => {
    const {logout, user} = useLogout();
    
    return (
        <div>
            <p style = {{fontWeight: "700"}}>Выбор завода</p>
            <Button onClick = {logout}>Выйти из профиля {user?.email}</Button>
            <Message content={""}/>
        </div>
    )
};

export default MainPage;