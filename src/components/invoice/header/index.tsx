import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { DefaultText } from '../../shared/defaultText'
import { useNavigation } from '@react-navigation/native'
import { useDateSelectState } from '../../../state/invoices'

const Icon: any = Feather

export const Header = (props: any) => {
  const navigation: any = useNavigation()
  const [date, setDate] = useDateSelectState()

  const handleNextMonth = () => {
    const currentDate = new Date(date)
    currentDate.setMonth(currentDate.getMonth() + 1)
    setDate(currentDate)
  }

  const handlePrevMonth = () => {
    const currentDate = new Date(date)
    currentDate.setMonth(currentDate.getMonth() - 1)
    setDate(currentDate)
  }

  return (
    <S.Container>
      {props.back ? (
        <S.BoxIcon onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="#fff" />
        </S.BoxIcon>
      ) : (
        <S.SpaceIcon />
      )}
      <S.WrapperMonths>
        <S.ActionButton onPress={handlePrevMonth}>
          <Icon name="chevron-left" size={16} color="#fff" />
        </S.ActionButton>
        <DefaultText text={months[date.getMonth()]} size="16px" type="bold" />
        <S.ActionButton onPress={handleNextMonth}>
          <Icon name="chevron-right" size={16} color="#fff" />
        </S.ActionButton>
      </S.WrapperMonths>
      {props.edit ? (
        <S.BoxIcon onPress={() => navigation.navigate('Edit')}>
          <Icon name="edit" size={16} color="#fff" />
        </S.BoxIcon>
      ) : (
        <S.SpaceIcon />
      )}
    </S.Container>
  )
}

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
]
