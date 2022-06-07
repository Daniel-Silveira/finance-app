import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/invoice/header'
import { Card } from '../../components/invoice/card'
import { Resume } from '../../components/invoice/resume'
import { InvoiceType } from '../../types/Invoice'
import { useInvoices } from '../../hooks/useInvoices'

const Home = () => {
  const { getInvoices } = useInvoices()
  const { invoices } = getInvoices()

  if (!invoices?.length) return null

  return (
    <SafeAreaView>
      <Header />
      <Resume data={invoices} user={{ balance: 10000 }} />
      <ScrollView showsVerticalScrollIndicator={false} style={{ height: '73%' }}>
        {invoices?.map((item: InvoiceType) => {
          return <Card key={item._id} {...item} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
