export interface InvoiceType {
  _id: string
  category: string
  title: string
  value: number
  installments?: {
    current: number
    total: number
  }
  status: string
  dueDate: string
  paymentType: string
}
