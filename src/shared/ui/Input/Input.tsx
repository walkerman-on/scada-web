import { FC, memo } from 'react';
import { IInputProps } from './IProps';
import { ConfigProvider, Input as ANTInput } from "antd"

export const Input:FC<IInputProps> = memo((props) => {

    return (
         <ConfigProvider
            theme={{
              components: {
                Input: {
                  colorBgContainer: 'var(--color-primary-600)',
                  colorBorder: 'var(--color-primary-600)',
                  hoverBorderColor: 'var(--color-primary-600)',
                  activeBorderColor: 'var(--color-primary-600)',
                  activeShadow:'var(--color-primary-500)',
                  colorText: 'var(--color-primary-200)',
                  colorTextPlaceholder:'var(--color-primary-400)',
                }
              }
            }}
        >
          <ANTInput placeholder="Поиск объекта..." allowClear></ANTInput>
        </ConfigProvider>
    );
});
