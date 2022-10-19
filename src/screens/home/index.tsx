import { ScrollView, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/invoice/header'
import { Card } from '../../components/invoice/card'
import { Resume } from '../../components/invoice/resume'
import { InvoiceType } from '../../types/Invoice'
import { useInvoices } from '../../hooks/useInvoices'
import { useCallback, useEffect, useState } from 'react'
import { useDateSelectState, useInvoicesState } from '../../state/invoices'
import { useUser } from '../../state/user'

const Home = () => {
  const { getInvoices } = useInvoices()
  const [date] = useDateSelectState()
  const [user] = useUser()
  const [invoices] = useInvoicesState()
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getInvoices(setRefreshing)
  }, [user._id, date])

  const onRefresh = useCallback(() => {
    getInvoices(setRefreshing)
  }, [])

  return (
    <SafeAreaView>
      <Header edit />
      <Resume data={invoices} user={{ balance: 27083.33 }} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: '64.6%' }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {invoices?.map((item: InvoiceType) => {
          return <Card key={item._id} {...item} />
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
