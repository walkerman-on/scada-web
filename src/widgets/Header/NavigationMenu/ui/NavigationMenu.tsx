import { classNames } from "shared/lib/classNames/classNames";
import cl from "./NavigationMenu.module.scss"
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavigationMenuProps {
    className?: string,
}

interface LinksProps {
    to: string,
    name: string
}

const Links: LinksProps[] = [
    {to: "/object", name: "Объект"},
    {to: "/infographics", name: "Инфографика"},
    {to: "/test", name: "Тестирование"},
]

export const NavigationMenu = ({className}: NavigationMenuProps) => {
    return (
        <div className = {classNames(cl.NavigationMenu, {}, [className])}>
                {Links.map((link) => 
                    <AppLink 
                        to ={link.to}
                        className = {cl.mainLink}
                        theme = {AppLinkTheme.LIGHT}
                    >
                        {link.name}
                    </AppLink>
                )}
            {/* <button style={{background: "white", padding: "5px"}} onClick={changeTheme}>Theme toggle</button>      */}
        </div>
    );
};
