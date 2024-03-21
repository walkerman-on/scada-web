import { FC, memo } from "react";
import { ISelectProps } from "./IProps";
import { ConfigProvider, Select as ANTSelect } from "antd";
import { useTheme } from "app/providers/ThemeProvider";
import { color } from "app/styles/themes/theme"

export const Select:FC<ISelectProps> = memo(({options, defaultValue, onChange, disabled} , props) => {
    const {theme} = useTheme()

     return (
         <ConfigProvider
            theme={{
              components: {
                Select: {
                  colorBgContainer: 'var(--color-primary-600)',
                  colorText: color[theme]['--color-primary-200'],
                  colorBorder: 'var(--color-primary-600)',
                  colorPrimaryHover:'var(--color-primary-600)', 
                  colorBgElevated: color[theme]['--color-primary-600'],
                  colorTextDisabled: color[theme]['--color-primary-400'],
                  colorTextPlaceholder: color[theme]['--color-primary-200'],
                  colorTextQuaternary: color[theme]['--color-primary-400'],
                  controlItemBgActive: color[theme]['--color-primary-500'],
                  controlItemBgHover: color[theme]['--color-primary-500'],
                  controlOutline: 'var(--color-primary-600)',
                  colorPrimary: color[theme]['--color-primary-600'],
                }
              }
            }}
        >
        <ANTSelect
            {...props}
            defaultValue = {defaultValue}
            style ={{width: 400}}
            onChange={onChange}
            options={options}
            size="large"
            disabled={disabled}
        />
        </ConfigProvider>)
})
