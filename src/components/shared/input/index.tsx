import * as S from './styled'

interface Props {
  placeholder: string
  width?: string
  keyboardType?: any
  onChangeText?: (value: string) => void
  secureTextEntry?: boolean
  value?: string
  error?: boolean
}

export const Input = (props: Props) => {
  return <S.Input placeholderTextColor={props.error ? '#FD5D5D' : '#ffffff70'} {...props} />
}
