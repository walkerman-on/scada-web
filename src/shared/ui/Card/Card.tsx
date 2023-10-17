import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Card.module.scss"
import { FC } from "react";
import { ICardProps } from "./IProps";


const Card:FC<ICardProps> = ({children, width, className}) => {
    return (
        <div className = {classNames(cl.Card, {}, [className])} style = {{width: width}}>
            {children}
        </div>
    );
};

export default Card;