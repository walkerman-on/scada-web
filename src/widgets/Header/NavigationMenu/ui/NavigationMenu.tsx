import cl from "./NavigationMenu.module.scss"
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface LinksProps {
    to: string,
    name: string
}

const Links: LinksProps[] = [
    {to: "/object", name: "Объект"},
    {to: "/infographics", name: "Инфографика"},
    {to: "/test", name: "Тестирование"},
]

export const NavigationMenu = () => {
    return (
        <nav className = {cl.NavigationMenu}>
            {Links.map((link) => 
                <AppLink 
                    to ={link.to}
                    className = {cl.mainLink}
                    theme = {AppLinkTheme.LIGHT}
                >
                    {link.name}
                </AppLink>
                )}
        </nav>
    );
};
