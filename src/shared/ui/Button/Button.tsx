import { FC, memo } from 'react';
import { IButtonProps } from './IProps';
import {Button as StyledButton} from "./styles"


export const Button:FC<IButtonProps> = memo((props) => {
    return (
        <StyledButton {...props}>{props.children}</StyledButton> 
    );
});

