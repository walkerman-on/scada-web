import { classNames } from "shared/lib/classNames/classNames";
import cl from "./ObjectMenu.module.scss"
import { FC, useState } from "react";
import Card from "shared/ui/Card/Card";
import { Link } from "react-router-dom";

interface ObjectMenuProps {
    className?: string,
    children?: React.ReactNode
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

export const ObjectMenu:FC<ObjectMenuProps> = () => {
    const [isActiveObject, setIsActiveObject] = useState(false);
    const [active, setActive] = useState(1);

    const handleClick = (index:number) => {
    setIsActiveObject(current => !current);
    setActive(index + 1)
  };
    return (
        <div className = {classNames(cl.ObjectMenu, {}, [])}>
            <div className = {cl.objectCountMenu}>
                <span className = {classNames(cl.objectText, {}, [])}>Объекты</span>
                <span className = {classNames(cl.objectText, {}, [])}>{Objects.length}</span>
            </div>
            <div className = {classNames(cl.object, {}, [])}>
                {Objects.map((object, index) => 
                    <Link 
                        to = {`/object/id${object.id}`} 
                        onClick={() => handleClick(index)} 
                        className = {classNames(cl.objectLink, {objectLinkActive: active === index + 1 ? isActiveObject : false}, [])}
                    >
                        {object.name}
                    </Link>
            )   }
            </div>
        </div>
    );
};
