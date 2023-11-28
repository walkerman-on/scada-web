import cl from "./AccountMenu.module.scss"
import { FC } from "react";
import { UserOutlined } from '@ant-design/icons';
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { NavLink as Link } from "react-router-dom";
import DefaultUserIcon from "shared/assets/icons/DefaultUserIcon";

interface AccountMenuProps {
    className?: string,
    children?: React.ReactNode
}

export const AccountMenu: FC<AccountMenuProps> = () => {
    
    return (
        <div className= {cl.AccountMenu} >
            <ThemeSwitcher/>
            <div className={cl.account}>
                <Link to ="/account">
                    <DefaultUserIcon/>
                </Link>
            </div>
        </div>
    );
};
