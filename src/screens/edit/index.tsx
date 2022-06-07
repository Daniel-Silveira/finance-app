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
import { useInvoices } from '../../hooks/useInvoices'

const Icon: any = Feather

const Edit = () => {
  const { getInvoices } = useInvoices()
  const { invoices } = getInvoices()

  const modalCreateRef = useRef<ModalType>(null)

  const handleOpenModal = () => {
    modalCreateRef.current?.open()
  }

  if (!invoices?.length) return null

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
          {invoices?.map((item: InvoiceType) => {
            return <Card key={item._id} {...item} />
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Edit
