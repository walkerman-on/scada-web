import { FC, memo } from 'react';
import { IInputProps } from './IProps';
import { Input as ANTInput } from 'antd';


export const Input:FC<IInputProps> = memo((props) => {
    return (
        <ANTInput {...props}></ANTInput> 
    );
});
