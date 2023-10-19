import styled from 'styled-components';
import { Button as ANTButton } from 'antd';

export const Button = styled(ANTButton)`
    background: var(--color-accent-800);
    &:hover {
    background: var(--color-accent-600) !important;
  }
`