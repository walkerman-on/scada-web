import { ConfigProvider, message as ANTMessage } from "antd";
import { FC, memo } from "react";
import { IMessageProps } from "./IProps";
import { Button } from "../Button";
import { useTheme } from "app/providers/ThemeProvider";
import { color } from "app/styles/themes/theme"
import { Theme } from "app/providers/ThemeProvider";

export const Message:FC<IMessageProps> = memo((props) => {
    const {theme} = useTheme()

    const [messageApi, contextHolder] = ANTMessage.useMessage(); 

    const btnClickHdlr = (): void => {
        messageApi.success("Регистрация прошла успешно!");
        messageApi.error("Введены некорректные данные!");
    };

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
            <Button onClick={btnClickHdlr}>сообщение</Button>
        </ConfigProvider>
    );
});
