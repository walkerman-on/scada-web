import cl from "./ObjectMenu.module.scss";
import { FC } from "react";
import { NavLink as Link } from "react-router-dom";
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
    {name: "Установка по сжижению газа (СПГ Портовая)", id: 2},
    {name: "Трубчатые печи", id: 3},
    {name: "Компрессорная станция", id: 4},
    {name: "Транспортировка нефти", id: 5},
]

export const ObjectMenu:FC<ObjectMenuProps> = () => {
    return (
        <div className = {cl.ObjectMenu}>
            <div className = {cl.objectCountMenu}>
                <span className = {cl.objectText}>Объекты</span>
                <span className = {cl.objectText}>{Objects.length}</span>
            </div>
            <div className = {cl.object}>
                {Objects.map((object) => 
                    <Link 
                        key={object.id}
                        to={`/object/${object.id}`} 
                        className = {({isActive}) => `${cl.objectLink} ${isActive ? cl.objectLinkActive : ""}`}
                    >
                        <div className = {cl.objectLinkItem}>
                            <LabelIcon />
                            <span className={cl.objectName}> {object.name} </span>
                        </div>
                    </Link>
                    )
                }
            </div>
        </div>
    );
};
