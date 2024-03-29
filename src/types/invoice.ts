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
  dueDay: string
  paymentType: string
  createdAt: string
  installmentsDate: {
    start: string
    end: string
  }
}
