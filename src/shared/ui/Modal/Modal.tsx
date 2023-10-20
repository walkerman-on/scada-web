import {Modal as StyledModal} from "./styles"
import { FC, memo } from "react";
import { IModalProps } from "./IProps";

export const Modal:FC<IModalProps> = memo((props) => {
    const {children, ...otherProps} = props

    return (
        <StyledModal {...otherProps}>
            {children}
        </StyledModal>
    );
})
