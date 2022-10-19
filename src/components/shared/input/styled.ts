import styled, { css } from 'styled-components/native'

export const Input = styled.TextInput`
  background-color: #263859;
  padding: 3%;
  border-radius: 6px;
  color: #fff;
  margin: 1.5% 0;
  border: 1px solid transparent;
  ${({ width, error }: any) => css`
    width: ${width || '100%'};
    border-color: ${error && '#FD5D5D'};
    color: ${error && '#FD5D5D'};
  `}
`
