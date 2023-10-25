import { AccountMenu } from "../AccountMenu";
import { NavigationMenu } from "../NavigationMenu";
import cl from "./Header.module.scss"

export const Header = () => {
    return (
        <div className = {cl.Header}>
            <NavigationMenu/>
            <AccountMenu/>
        </div>
    );
};
