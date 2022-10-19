import { DefaultText } from '../../shared/defaultText'
import { Input } from '../../shared/input'
import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import { Button } from '../../shared/button'
import { useInvoices } from '../../../hooks/useInvoices'
import { InvoiceType } from '../../../types/Invoice'
import { useEffect } from 'react'
import { formatPrice } from '../../../utils'

const Icon: any = Feather

interface PropsCreate {
  data: InvoiceType
  closeModal: () => void
}

export const Create = (props: PropsCreate) => {
  const { createInvoice, editInvoice } = useInvoices()

  const [error, setError] = useState({ inputs: [], message: '' })
  const [invoice, setInvoice] = useState<InvoiceType>({
    paymentType: '',
    category: '',
  })

  const verifyTypeSelect = (type: string) => invoice.paymentType === type
  const verifyCategorySelect = (category: string) => invoice.category === category
  const changeState = (key: string, value: any) => {
    setInvoice({ ...invoice, [key]: value })
  }

  const validadeInputs = () => {
    const requireds = ['title', 'value', 'paymentType', 'category']
    const emptyInputs = requireds.filter(required => !invoice[required])
    if (emptyInputs.length) {
      setError({ inputs: emptyInputs, message: 'Por favor preencha todos os campos' })
      return false
    }
    return true
  }

  const verifyErrorByInput = (input: string) => error.inputs.find((emptyInput: string) => emptyInput === input)

  const handleActionSave = () => {
    const createFn = () => createInvoice(invoice)
    const editFn = () => editInvoice(props.data._id, invoice)
    if (!!props.data?._id) {
      return editFn()
    }
    return createFn()
  }

  const handleCreate = async () => {
    console.log(validadeInputs())
    // const { status } = await handleActionSave()
    // if (status === 201 || status === 200) {
    //   await getInvoices()
    //   props.closeModal()
    // }
  }

  useEffect(() => {
    if (props.data) {
      setInvoice(props.data)
    }
  }, [])
  console.log(error)
  return (
    <S.Container>
      <DefaultText text="Novo item" type="bold" size="16px" margin={['bottom', '2%']} />
      <Input
        placeholder="Titulo"
        error={verifyErrorByInput('title')}
        value={invoice.title}
        onChangeText={value => changeState('title', value)}
      />
      <Input
        placeholder="Valor"
        error={verifyErrorByInput('value')}
        keyboardType="decimal-pad"
        value={invoice.value?.toString()}
        onChangeText={value => changeState('value', value.replace(',', '.'))}
      />
      <Input
        placeholder="Dia de vencimento"
        error={verifyErrorByInput('dueDay')}
        keyboardType="decimal-pad"
        value={invoice.dueDay?.toString()}
        onChangeText={value => changeState('dueDay', value)}
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
            value={String(invoice.installments?.current)}
            onChangeText={value =>
              setInvoice({ ...invoice, installments: { ...invoice.installments, current: value } })
            }
          />
          <Input
            placeholder="Nº total de parcelas"
            width="48.5%"
            keyboardType="decimal-pad"
            value={String(invoice.installments?.total)}
            onChangeText={value => setInvoice({ ...invoice, installments: { ...invoice.installments, total: value } })}
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
      <DefaultText text={error.message} />
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
