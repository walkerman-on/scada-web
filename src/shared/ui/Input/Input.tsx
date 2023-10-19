import { FC, memo } from 'react';
import { IInputProps } from './IProps';
import {Input as StyledInput} from "./styles"
import {ConfigProvider, Input as ANTInput} from "antd"

const { Search } = ANTInput;
export const Input:FC<IInputProps> = memo((props) => {
    
    return (
//          <ConfigProvider
//     theme={{
//       token: {
//         // Seed Token
//         // colorPrimary: '#00b96b',
//         // borderRadius: 2,

//         // colorBgBase: "#f6ffed",
//         // colorPrimary: "#f57950",

//         // Alias Token
//         colorBgContainer: 'var(--color-primary-600)',
//         // colorPrimary: "var(--color-accent-800)",
//         colorPrimaryHover: "var(--color-primary-600)",
//         colorPrimaryBorder: "var(--color-primary-600)",
//         colorPrimaryBorderHover: "var(--color-primary-600)",
//         colorText: "var(--color-primary-200)",
//         colorBorder: "var(--color-primary-600)",
//         boxShadowTertiary: "#00b96b",
//         controlOutline: "var(--color-accent-800)",
//         controlItemBgActiveHover: "#00b96b"
//       },
//     }}
//   >
//     <ANTInput placeholder="input search text" allowClear></ANTInput>

//   </ConfigProvider>
        <StyledInput {...props}></StyledInput> 
    );
});
