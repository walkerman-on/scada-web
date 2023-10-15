import { FC, memo } from 'react';
import { IButtonProps } from './IProps';
import { Button as ANTButton } from 'antd';


export const Button:FC<IButtonProps> = memo((props) => {
    return (
        <ANTButton {...props}>{props.children}</ANTButton> 
    );
});

