import * as S from './styled'
import { AntDesign } from '@expo/vector-icons'
import { DefaultText } from '../../shared/defaultText'
import { InvoiceType } from '../../../types/Invoice'
import { convertStatus, formatPrice, maxLengthText, padStart } from '../../../utils'

const Icon: any = AntDesign

interface InvoiceProps extends InvoiceType {
  onPress?: () => void
}

export const Card = (props: InvoiceProps) => {
  const installments = `(${padStart(props.installments?.current)}/${padStart(props.installments?.total)})`
  const icon: any = {
    card: 'creditcard',
    barcode: 'barcode',
    others: 'ellipsis1'
  }

  return (
    <S.Card onPress={props.onPress}>
      <S.BoxIcon>
        <Icon name={icon[props.category]} size={16} color="#fff" />
      </S.BoxIcon>
      <S.WrapperContent>
        <S.Content>
          <S.WrapperName>
            <DefaultText size="18px" type="bold">
              {maxLengthText(props.title, 21)}
            </DefaultText>
            <DefaultText margin={['left', '5%']}>{!!props.installments && installments}</DefaultText>
          </S.WrapperName>
          <DefaultText size="20px" type="medium">
            {formatPrice(props.value)}
          </DefaultText>
        </S.Content>
        <S.Content>
          <DefaultText>Vencimento dia {padStart(props.dueDay)}</DefaultText>
          <DefaultText color={convertStatus(props.status).color} type="bold">
            {convertStatus(props.status).text}
          </DefaultText>
        </S.Content>
      </S.WrapperContent>
    </S.Card>
  )
}
