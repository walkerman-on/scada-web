import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Card.module.scss"
import { FC } from "react";

interface CardProps {
    className?: string,
    children?: React.ReactNode,
    padding?: string,
    width?: string
}

const Card:FC<CardProps> = ({children, padding, width}) => {
    return (
        <div className = {classNames(cl.Card, {}, [])} style = {{padding: padding, width: width}}>
            {children}
        </div>
    );
};

export default Card;