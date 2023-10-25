import { ConfigProvider, Modal as ANTModal } from "antd"
import { FC, memo } from "react";
import { IModalProps } from "./IProps";
import { useTheme } from 'app/providers/ThemeProvider';
import { color } from "app/styles/themes/theme"

export const Modal:FC<IModalProps> = memo((props) => {
    const {children, ...otherProps} = props
    const {theme} = useTheme()

    return (
        <ConfigProvider
            theme={{
              components: {
                Modal: {
                  colorBgElevated: color[theme]['--color-primary-200'],
                  colorTextHeading: color[theme]['--color-primary-400'],
                }
              }
            }}
        >
            <ANTModal {...otherProps}>
                {children}
            </ANTModal>
        </ConfigProvider>
      
    );
})
