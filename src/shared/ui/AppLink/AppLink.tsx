import { classNames } from "shared/lib/classNames/classNames";
import { NavLink as Link, LinkProps } from "react-router-dom";
import cl from "./AppLink.module.scss"
import { FC } from "react";

export enum AppLinkTheme {
    LIGHT = "light",
    DARK = "dark"
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.LIGHT, ...otherProps} = props

    return (
        <Link 
            to = {to} 
            className = {({isActive}) => `${cl.AppLink} ${isActive ? cl.AppLinkActive : ""}`}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

export default AppLink;