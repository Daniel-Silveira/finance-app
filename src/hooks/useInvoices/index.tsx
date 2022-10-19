import http from '../../services/api'
import { useDateSelectState, useInvoicesState } from '../../state/invoices'
import { useUser } from '../../state/user'
import { InvoiceType } from '../../types/Invoice'
import { filterByInstallments, filterByMonth, orderByDueDay, validadeStatusByDueDay } from '../../utils'

export const useInvoices = () => {
  const PARTIAL_URL = 'invoices'
  const [invoice, setInvoice] = useInvoicesState()
  const [user] = useUser()
  const [date] = useDateSelectState()

  const getInvoices = async (setLoading?: any) => {
    if (!user._id) return null
    setLoading(true)
    try {
      const { data } = await http.get(`${PARTIAL_URL}/${user._id}`)
      const convertStatus = data.map((invoice: InvoiceType) => ({
        ...invoice,
        status: validadeStatusByDueDay(invoice.status, invoice.dueDay),
      }))
      const dataOrder = orderByDueDay(convertStatus)
      filterByInstallments(orderByDueDay(data), date)
      const currentDate = new Date()

      if (date?.getMonth() !== currentDate.getMonth()) {
        setLoading(false)
        setInvoice(filterByMonth(orderByDueDay(data), date))
        return
      }
      setLoading(false)
      setInvoice(dataOrder)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const createInvoice = async (data: InvoiceType) => {
    const { status } = await http.post(`/${PARTIAL_URL}/create`, { ...data, userId: user._id })
    return { status }
  }

  const editInvoice = async (invoiceId: string, data: InvoiceType) => {
    const { status } = await http.put(`/${PARTIAL_URL}/update/${invoiceId}`, data)
    return { status }
  }

  return { getInvoices, createInvoice, editInvoice }
}
