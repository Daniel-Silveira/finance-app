import * as S from './styled'

interface Props {
  placeholder: string
  width?: string
  keyboardType?: any
  onChangeText?: (value: string) => void
}

export const Input = (props: Props) => {
  return <S.Input placeholderTextColor="#ffffff70" {...props} />
}
