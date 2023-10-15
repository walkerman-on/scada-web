import { classNames } from "shared/lib/classNames/classNames";
import cl from "./AccountMenu.module.scss"
import { Avatar } from "antd";
import { FC } from "react";
import { UserOutlined } from '@ant-design/icons';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface AccountMenuProps {
    className?: string,
    children?: React.ReactNode
}

export const AccountMenu: FC<AccountMenuProps> = () => {
    
    return (
        <div className= {classNames(cl.AccountMenu, {}, [])} >
            <ThemeSwitcher/>
            <div className={cl.account}>
                <span className={cl.accountText}>Алексей Грошев</span> 
                <Avatar icon={<UserOutlined />}/>
            </div>
        </div>
    );
};
