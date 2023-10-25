import { classNames } from "shared/lib/classNames/classNames";
import cl from "./Card.module.scss"
import { FC } from "react";
import { ICardProps } from "./IProps";


const Card:FC<ICardProps> = (props) => {
    const {children, width} = props

    return (
        <div className = {cl.Card} style = {{width: width}}>
            {children}
        </div>
    );
};

export default Card;