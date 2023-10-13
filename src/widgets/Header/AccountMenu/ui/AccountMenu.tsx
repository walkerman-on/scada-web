import { classNames } from "shared/lib/classNames/classNames";
import cl from "./AccountMenu.module.scss"
import { Avatar } from "antd";
import { FC } from "react";
import { UserOutlined } from '@ant-design/icons';

interface AccountMenuProps {
    className?: string,
    children?: React.ReactNode
}

export const AccountMenu: FC<AccountMenuProps> = () => {
    
    return (
        <div className= {classNames(cl.menu)} >
            <Avatar>АГ</Avatar>
            {/* <div style = {{background: "tomato", height: "50px", width: "50px", borderRadius: "50%"}}></div> */}
        </div>
    );
};
