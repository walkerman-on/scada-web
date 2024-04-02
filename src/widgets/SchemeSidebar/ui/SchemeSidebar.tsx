import React, { useState } from 'react';
import cl from "./SchemeSidebar.module.scss"
import { Input } from 'shared/ui/Input';
import { classNames } from 'shared/lib/classNames/classNames';
import SidebarToggleIconLeft from 'shared/assets/icons/SidebarToggleIconLeft';
import SidebarToggleIconRight from 'shared/assets/icons/SidebarToggleIconRight';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';

export interface IProps {
    collapsed: boolean
}

export const SchemeSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

  const valve = useAppSelector(state => state.valve.currentValve)


    return (
        <div className={classNames(cl.SchemeSidebar, {[cl.collapsed]: collapsed})}>
            <div className={cl.sidebarHeader}>
                <div className={cl.sidebarToggle} onClick={onToggle}>
                    {collapsed ?  <SidebarToggleIconRight />:  <SidebarToggleIconLeft />} 
                </div>
            </div>
            <div className={cl.sidebarMain}>
                <div className={cl.features}>
                    <span className={cl.textFirst}>
                        <span className={cl.textFeatures}>Свойства: </span>{valve?.title}</span>
                        <div className={cl.featuresParams}>
                            <span>μ =</span>
                            <Input text='значение μ'/>
                        </div>
                </div>
                <div className={cl.features}>
                    <span className={cl.textSecond}>Расчетные параметры</span>
                    <div className={cl.inputValue}>
                        <Input/>
                        <Input/>
                        <Input/>
                    </div>
                    
                </div>
                <div className={cl.features}>
                    <span className={cl.textSecond}>Геометрические параметры</span>
                    <div className={cl.inputValue}>
                        <Input/>
                        <Input/>
                        <Input/>
                    </div>
                </div>
            </div>
        </div>
    );
};