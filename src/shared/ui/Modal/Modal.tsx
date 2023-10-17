import {Modal as ANTModal} from "antd"
import { FC } from "react";
import { IModalProps } from "./IProps";

export const Modal:FC<IModalProps> = (props) => {
    const {children, ...otherProps} = props

    return (
        <ANTModal {...otherProps}>
            {children}
        </ANTModal>
    );
};
