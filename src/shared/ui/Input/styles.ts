import styled from "styled-components";

import { Input as ANTInput } from 'antd';

export const Input = styled(ANTInput)`
    background-color: var(--color-primary-900) !important;
    color: var(--color-primary-800) !important;
    border-color:  var(--color-primary-900);
    &:hover {
        border-color:  var(--color-primary-900) ;     
    };
    &:where(.css-dev-only-do-not-override-3mqfnx).ant-input-affix-wrapper >input.ant-input{
        background-color: var(--color-primary-900) !important; 
    };
    :where(.css-dev-only-do-not-override-3mqfnx).ant-input {
        color: var(--color-primary-200)
    };
    &:where(.css-dev-only-do-not-override-3mqfnx).ant-input-affix-wrapper:focus-within{
        border-color: var(--color-primary-900)!important;
        box-shadow: 0 0 0 2px var(--color-primary-900);
    };
`