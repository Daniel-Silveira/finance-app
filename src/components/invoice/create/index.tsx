import { DefaultText } from '../../shared/defaultText'
import { Input } from '../../shared/input'
import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { Button } from '../../shared/button'
import { useInvoices } from '../../../hooks/useInvoices'

const Icon: any = Feather

export const Create = () => {
  const { createInvoice } = useInvoices()

  const [data, setData] = useState<any>({
    userId: '629f88e59080731c46f9be63',
    paymentType: '',
    category: '',
  })

  const verifyTypeSelect = (type: string) => data.paymentType === type
  const verifyCategorySelect = (category: string) => data.category === category

  const changeState = (key: string, value: any) => {
    setData({ ...data, [key]: value })
  }

  const handleCreate = async () => {
    const { status } = await createInvoice(data)
  }

  return (
    <S.Container>
      <DefaultText text="Novo item" type="bold" size="16px" margin={['bottom', '2%']} />
      <Input placeholder="Titulo" onChangeText={value => changeState('title', value)} />
      <Input placeholder="Valor" keyboardType="decimal-pad" onChangeText={value => changeState('value', value)} />
      <Input
        placeholder="Dia de vencimento"
        keyboardType="decimal-pad"
        onChangeText={value => changeState('dueDate', value)}
      />
      <DefaultText
        text="Selecione o tipo de parcelamento"
        size="14px"
        type="bold"
        margin={['', '3% 0 2%']}
        width="100%"
      />
      <S.WrapperCheck>
        {installmentsTypes.map(item => (
          <CheckBox
            key={item}
            text={convertTextTypes[item]}
            active={verifyTypeSelect(installmentsType[item])}
            onPress={() => changeState('paymentType', installmentsType[item])}
          />
        ))}
      </S.WrapperCheck>
      {verifyTypeSelect(installmentsType.installments) && (
        <S.Group>
          <Input
            placeholder="Nº da parcela atual"
            width="48.5%"
            keyboardType="decimal-pad"
            onChangeText={value => setData({ ...data, installments: { ...data.installments, current: value } })}
          />
          <Input
            placeholder="Nº total de parcelas"
            width="48.5%"
            keyboardType="decimal-pad"
            onChangeText={value => setData({ ...data, installments: { ...data.installments, total: value } })}
          />
        </S.Group>
      )}
      <DefaultText text="Selecione a categoria" size="14px" type="bold" margin={['', '3% 0 2%']} width="100%" />
      <S.WrapperCheck>
        {categoriesTypes.map(item => (
          <CheckBox
            key={item}
            text={convertTextCategories[item]}
            active={verifyCategorySelect(categoriesType[item])}
            onPress={() => changeState('category', categoriesType[item])}
          />
        ))}
      </S.WrapperCheck>
      <S.WrapperButton>
        <Button text="Salvar" onPress={handleCreate} />
      </S.WrapperButton>
    </S.Container>
  )
}

const CheckBox = (props: any) => (
  <S.CheckBox onPress={props.onPress}>
    <Icon name={props.active ? 'check-square' : 'square'} size={18} color={props.active ? '#05DFD7' : '#ffffff70'} />
    <DefaultText margin={['left', '5%']} text={props.text} size="14px" type="bold" color="#ffffff70" />
  </S.CheckBox>
)

const installmentsType: any = {
  installments: 'installments',
  inCash: 'inCash',
  recurring: 'recurring',
}

const categoriesType: any = {
  card: 'card',
  others: 'others',
  barcode: 'barcode',
}

const convertTextTypes: any = {
  installments: 'Parcelado',
  inCash: 'À vista',
  recurring: 'Recorrente',
}

const convertTextCategories: any = {
  card: 'Cartão',
  others: 'Outros',
  barcode: 'Boleto',
}

const installmentsTypes = [installmentsType.inCash, installmentsType.installments, installmentsType.recurring]
const categoriesTypes = [categoriesType.card, categoriesType.barcode, categoriesType.others]
