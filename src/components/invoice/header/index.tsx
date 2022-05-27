import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { DefaultText } from '../../shared/defaultText'
import { useNavigation } from '@react-navigation/native'

const Icon: any = Feather

export const Header = () => {
  const navigation: any = useNavigation()

  return (
    <S.Container>
      <S.SpaceIcon />
      <S.WrapperMonths>
        <Icon name="chevron-left" size={16} color="#fff" />
        <DefaultText text="Maio" size="16px" type="bold" />
        <Icon name="chevron-right" size={16} color="#fff" />
      </S.WrapperMonths>
      <S.BoxIcon onPress={() => navigation.navigate('Edit')}>
        <Icon name="edit" size={16} color="#fff" />
      </S.BoxIcon>
    </S.Container>
  )
}
