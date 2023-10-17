import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ObjectMenu.module.scss"
import { FC, useState } from "react";
import { NavLink as Link, useLocation } from "react-router-dom";
import LabelIcon from "shared/assets/icons/LabelIcon";

interface ObjectMenuProps {
    className?: string,
    children?: React.ReactNode,
    activeClassName?: string
}

interface ObjectsProps {
    name: string,
    id: number
}

const Objects: ObjectsProps[] = [
    {name: "Резервуарный парк", id: 1},
    {name: "Установка по сжижению газа", id: 2},
    {name: "Трубчатые печи", id: 3},
    {name: "Компрессорная станция", id: 4},
    {name: "Транспортировка нефти", id: 5},
]

export const ObjectMenu:FC<ObjectMenuProps> = (props) => {
    // const {className, children, theme = AppLinkTheme.LIGHT, ...otherProps} = props

    
    return (
        <div className = {classNames(cl.ObjectMenu, {}, [])}>
            <div className = {cl.objectCountMenu}>
                <span className = {classNames(cl.objectText, {}, [])}>Объекты</span>
                <span className = {classNames(cl.objectText, {}, [])}>{Objects.length}</span>
            </div>
            <div className = {classNames(cl.object, {}, [])}>
                {Objects.map((object) => 
                    <Link 
                        to={`/object/${object.id}`} 
                        className = {({isActive}) => isActive ? cl.objectLinkActive : cl.objectLink}
                    >
                        <div className = {classNames(cl.objectLinkItem, {}, [])}>
                            <LabelIcon />
                            {object.name}
                        </div>
                    </Link>
                    )
                }
            </div>
        </div>
    );
};
