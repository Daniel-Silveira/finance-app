import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/invoice/header'
import { Card } from '../../components/invoice/card'
import { Resume } from '../../components/invoice/resume'
import { InvoiceType } from '../../types/Invoice'

const Home = () => {
  return (
    <SafeAreaView>
      <Header />
      <Resume data={MOCK.invoices} user={MOCK.user} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: '73%' }}>
        {MOCK.invoices.map((item: InvoiceType) => {
          return <Card key={item._id} {...item} />
        })}
      </ScrollView>
    </SafeAreaView>
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

export default Home
