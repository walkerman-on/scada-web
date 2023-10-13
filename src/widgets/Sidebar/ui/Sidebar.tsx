import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cl from "./Sidebar.module.scss";
import Search from 'antd/es/input/Search';
import { ObjectMenu } from '../ObjectMenu';
import Card from 'shared/ui/Card/Card';

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
                    <Search placeholder="Поиск..." allowClear onSearch={onSearch} style={{ width: "auto" }} />
                </div>
                <ObjectMenu/>
            </div>
            <Card padding='20px' width='180px'>Новый объект</Card>
        </div>
    );
};
