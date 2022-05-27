import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/header'
import { Card } from '../../components/invoice/card'
import { DefaultText } from '../../components/shared/defaultText'
import { InvoiceType } from '../../types/Invoice'
import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { Modal, ModalType } from '../../components/modal'
import { useRef } from 'react'
import { Create } from '../../components/invoice/create'

const Icon: any = Feather

const Edit = () => {
  const modalCreateRef = useRef<ModalType>(null)

  const handleOpenModal = () => {
    modalCreateRef.current?.open()
  }

  return (
    <>
      <Modal customRef={modalCreateRef} height={450}>
        <Create />
      </Modal>
      <SafeAreaView>
        <Header title="Maio" />
        <S.EmptyCard onPress={handleOpenModal}>
          <S.BoxIcon>
            <Icon name="plus" size={18} color="#fff" />
          </S.BoxIcon>
          <DefaultText size="14px" type="bold" text="Adicionar novo item" margin={['left', '3%']} />
        </S.EmptyCard>
        <ScrollView showsVerticalScrollIndicator={false} style={{ height: '73%' }}>
          {MOCK.invoices.map((item: InvoiceType) => {
            return <Card key={item._id} {...item} />
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const MOCK: any = {
  user: {
    balance: 25000,
  },
  invoices: [
    {
      _id: '1',
      title: 'Carro',
      value: 1628.32,
      installments: {
        current: 33,
        total: 36,
      },
      dueDate: 10,
      status: 'PENDING',
      type: 'INVOICE',
    },
    {
      _id: '2',
      title: 'Celular',
      value: 2432.43,
      installments: {
        current: 1,
        total: 12,
      },
      dueDate: 8,
      status: 'PAID',
      type: 'CARD',
    },
    {
      _id: '3',
      title: 'Mercado',
      value: 550,
      dueDate: 9,
      status: 'LATE',
      type: 'CARD',
    },
  ],
}

export default Edit
