import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/invoice/card'
import { DefaultText } from '../../components/shared/defaultText'
import { InvoiceType } from '../../types/Invoice'
import * as S from './styled'
import { Feather } from '@expo/vector-icons'
import { Modal, ModalType } from '../../components/modal'
import { useRef, useState } from 'react'
import { Create } from '../../components/invoice/create'
import { useInvoicesState } from '../../state/invoices'
import { Header } from '../../components/invoice/header'

const Icon: any = Feather

const Edit = () => {
  const [invoices] = useInvoicesState()
  const modalCreateRef = useRef<ModalType>(null)
  const [invoiceEdit, setInvoiceEdit] = useState<InvoiceType>({})

  const handleOpenModal = () => {
    modalCreateRef.current?.open()
  }

  const handleCloseModal = () => {
    modalCreateRef.current?.close()
  }

  const handleEditInvoice = (invoice: InvoiceType) => {
    handleOpenModal()
    setInvoiceEdit(invoice)
  }

  return (
    <>
      <Modal customRef={modalCreateRef} height={450}>
        <Create closeModal={handleCloseModal} data={invoiceEdit} />
      </Modal>
      <SafeAreaView>
        <Header back />
        <S.EmptyCard onPress={handleOpenModal}>
          <S.BoxIcon>
            <Icon name="plus" size={18} color="#fff" />
          </S.BoxIcon>
          <DefaultText size="14px" type="bold" text="Adicionar novo item" margin={['left', '3%']} />
        </S.EmptyCard>
        <ScrollView showsVerticalScrollIndicator={false} style={{ height: '87%' }}>
          {invoices?.map((item: InvoiceType) => {
            return <Card key={item._id} onPress={() => handleEditInvoice(item)} {...item} />
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Edit
