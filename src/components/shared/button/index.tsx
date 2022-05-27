import { DefaultText } from '../defaultText'
import * as S from './styled'

interface Props {
  width?: string
  text?: string
  children?: any
  onPress?: () => void
}

export const Button = (props: Props) => {
  return (
    <S.Touchable {...props}>
      <DefaultText type='bold' size="14px">{props.text || props.children}</DefaultText>
    </S.Touchable>
  )
}
