import http from '../../services/api'
import { InvoiceType } from '../../types/Invoice'
import { useGet } from '../useGet'

export const useInvoices = () => {
  const PARTIAL_URL = 'invoices'
  //   const { _id } = useUserSelect()

  const getInvoices = () => {
    const { data } = useGet<InvoiceType[]>('invoices', `${PARTIAL_URL}/629f88e59080731c46f9be63`)
    const invoices = data?.map((invoice: InvoiceType) => ({ ...invoice, status: 'PENDING' }))
    return { invoices }
  }

  const createInvoice = async (data: InvoiceType) => {
    const { status } = await http.post(`/${PARTIAL_URL}/create`, data)
    return { status }
  }

  return { getInvoices, createInvoice }
}
