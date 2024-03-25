import { ConfigProvider, message as ANTMessage } from "antd";
import { FC, memo, useEffect, useState } from "react";
import { IMessageProps } from "./IProps";
import { Button } from "../Button";
import { useTheme } from "app/providers/ThemeProvider";
import { color } from "app/styles/themes/theme"
import { Theme } from "app/providers/ThemeProvider";
import React from "react";

export const Message:FC<IMessageProps> = memo((props) => {
    const {theme} = useTheme()
    const [errorState, setErrorState] = useState<Boolean>(false)

    const [messageApi, contextHolder] = ANTMessage.useMessage(); 

    const messageShow = (): void => {
      setErrorState(true)
      messageApi.error(props.content);
    };

    useEffect(() => {
      messageShow()
    }, [errorState])

    return (
         <ConfigProvider
            theme={{
              components: {
                Message: {
                  contentBg: theme === Theme.DARK ? color[theme]['--color-primary-600'] : color[theme]['--color-primary-700'],
                  colorText: color[theme]['--color-primary-200'],
                }
              }
            }}
        >
            {contextHolder}
        </ConfigProvider>
    );
});
