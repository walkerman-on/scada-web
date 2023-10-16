import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from "./Sidebar.module.scss";
import { ObjectMenu } from '../ObjectMenu';
import Card from 'shared/ui/Card/Card';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';

interface SidebarProps {
    children?: React.ReactNode,
    className?: string
}

export const Sidebar:FC<SidebarProps> = ({children}) => {
    const onSearch = () => {
        console.log("search")
    }
    return (
        <div className = {classNames(cl.Sidebar, {}, [])}>
            <div className = {cl.sidebarMenu}>
                <div className = {cl.inputMenu}>
                    <span className = {cl.textSCADA}>SCADA Systems</span>
                    <Input 
                        placeholder='Поиск объекта'
                        allowClear
                    />
                </div>
                <ObjectMenu/>
            </div>
            <Card padding='10px 20px' width='180px' className = {classNames(cl.AddObjectMenu, {}, [])}>
                <span className = {cl.textCard}>Новый объект</span>
                <Button type = "primary" shape="default" size="small" color='red'>+</Button>
            </Card>
        </div>
    );
};
