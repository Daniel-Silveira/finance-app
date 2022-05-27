import * as S from './styled'
import { AntDesign } from '@expo/vector-icons'
import { DefaultText } from '../../shared/defaultText'
import { InvoiceType } from '../../../types/Invoice'
import { convertStatus, formatPrice, padStart } from '../../../utils'

const Icon: any = AntDesign

export const Card = (props: InvoiceType) => {
  const installments = `(${padStart(props.installments?.current)}/${padStart(props.installments?.total)})`
  const icon: any = {
    CARD: 'creditcard',
    INVOICE: 'barcode',
  }
  return (
    <S.Card>
      <S.BoxIcon>
        <Icon name={icon[props.type]} size={16} color="#fff" />
      </S.BoxIcon>
      <S.WrapperContent>
        <S.Content>
          <S.WrapperName>
            <DefaultText size="18px" type="bold">
              {props.title}
            </DefaultText>
            <DefaultText margin={['left', '5%']}>{!!props.installments && installments}</DefaultText>
          </S.WrapperName>
          <DefaultText size="20px" type="medium">
            {formatPrice(props.value)}
          </DefaultText>
        </S.Content>
        <S.Content>
          <DefaultText>Vencimento dia {padStart(props.dueDate)}</DefaultText>
          <DefaultText color={convertStatus(props.status).color} type="bold">
            {convertStatus(props.status).text}
          </DefaultText>
        </S.Content>
      </S.WrapperContent>
    </S.Card>
  )
}
