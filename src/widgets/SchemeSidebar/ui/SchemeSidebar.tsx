import { FC } from 'react';
import cl from "./SchemeSidebar.module.scss"
import { classNames } from 'shared/lib/classNames/classNames';
import SidebarToggleIconLeft from 'shared/assets/icons/SidebarToggleIconLeft';
import SidebarToggleIconRight from 'shared/assets/icons/SidebarToggleIconRight';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector/useAppSelector';
import { ValveParametrs } from 'widgets/ValveParametrs';

export interface IProps {
    collapsed: boolean,
    setCollapsed: (prev: boolean) => void
}

export const SchemeSidebar:FC<IProps> = ({collapsed, setCollapsed}) => {
    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    const valveData = useAppSelector(state => state.valve?.currentValve)
    const valveInfo = valveData?.map( item => item?.valve)
    const valveParameter = valveData?.map( item => item?.parameters)

    return (
        <div className={classNames(cl.SchemeSidebar, {[cl.collapsed]: collapsed})}>
            <div className={cl.sidebarHeader}>
                <div className={cl.sidebarToggle} onClick={onToggle}>
                    {collapsed ?  <SidebarToggleIconRight />:  <SidebarToggleIconLeft />} 
                </div>
            </div>
            <div className={cl.sidebarMain}>
                {/* <span className={cl.textFeatures}>Свойства: </span>{valveInfo} */}
                 <ValveParametrs parameters={valveParameter} valveInfo={valveInfo}/>
            </div>
        </div>
    );
}