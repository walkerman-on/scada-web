import { FC, memo } from 'react';
import { IButtonProps } from './IProps';
import {ConfigProvider, Button as ANTButton} from "antd"
import { useTheme } from 'app/providers/ThemeProvider';
import { color } from "app/styles/themes/theme"


export const Button:FC<IButtonProps> = memo((props) => {
    const {theme} = useTheme()

    return (
        <ConfigProvider
            theme={{
              components: {
                Button: {
                  colorBorder: color[theme]['--color-accent-800'],
                  colorBgContainer: color[theme]['--color-accent-800'],
                  colorPrimary: 'var(--color-accent-800)',
                  colorPrimaryHover: 'var(--color-accent-600)',
                  colorPrimaryActive: 'var(--color-accent-800)',
                  colorTextLightSolid: color[theme]['--color-primary-200'],
                }
              }
            }}
        >
            <ANTButton {...props}>{props.children}</ANTButton> 
        </ConfigProvider>
    );
});

