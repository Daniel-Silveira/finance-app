import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { DefaultText } from '../shared/defaultText'

const Icon: any = Feather

interface Props {
  title?: string
}

export const Header = (props: Props) => {
  const navigation: any = useNavigation()

  return (
    <S.Container>
      <S.BoxIcon onPress={() => navigation.goBack()}>
        <Icon name="chevron-left" size={20} color="#fff" />
      </S.BoxIcon>
      <DefaultText text={props.title} size="16px" type="bold" />
      <S.SpaceIcon />
    </S.Container>
  )
}
