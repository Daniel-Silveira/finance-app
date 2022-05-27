import styled, { css } from 'styled-components/native'

const weightVariants: any = {
  bold: '-Bold',
  medium: '-Medium',
  default: '',
}

interface Props {
  type?: string
  size?: string
  marginConfig?: string
  color?: string
  width?: string
}

export const Text = styled.Text`
  ${(props: Props) =>
    props &&
    css`
      font-family: ${`Gilroy${weightVariants[props?.type || 'default']}`};
      font-size: ${props.size || '12px'};
      color: ${props.color || '#fff'};
      ${!!props.width && `width: ${props.width}`};
      ${props.marginConfig};
    `}
`
