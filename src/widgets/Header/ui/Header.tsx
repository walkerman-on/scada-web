import { classNames } from "shared/lib/classNames/classNames";
import { AccountMenu } from "../AccountMenu";
import { NavigationMenu } from "../NavigationMenu";
import cl from "./Header.module.scss"

interface HeaderProps {
    className?: string,
}

export const Header = ({className}: HeaderProps) => {
    return (
        <div className = {classNames(cl.Header, {}, [className])}>
            <NavigationMenu/>
            <AccountMenu/>
        </div>
    );
};
