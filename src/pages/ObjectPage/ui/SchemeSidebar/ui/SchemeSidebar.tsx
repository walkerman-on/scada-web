import React, { useState } from 'react';
import cl from "./SchemeSidebar.module.scss"
import { Input } from 'shared/ui/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import SidebarToggleIconLeft from 'shared/assets/icons/SidebarToggleIconLeft';
import SidebarToggleIconRight from 'shared/assets/icons/SidebarToggleIconRight';


export const SchemeSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cl.SchemeSidebar, {[cl.collapsed]: collapsed})}>
            <div className={cl.sidearHeader}>
                <span className={cl.sidearTitle}>Технологические параметры</span>
                <div className={cl.sidebarToggle} onClick={onToggle}>
                    {collapsed ?  <SidebarToggleIconRight />:  <SidebarToggleIconLeft />} 
                </div>
            </div>
            <Input/>
        </div>
    );
};
