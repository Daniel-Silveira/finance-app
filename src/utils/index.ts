import { Theme } from '../theme'
import { InvoiceType } from '../types/Invoice'

export const padStart = (text: any) => {
  return String(text).padStart(2, '0')
}

export const formatPrice = (number: any) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
}

export const calculateValueByArray = (array: any, selector: string) => {
  if (!array?.length) return
  return array.reduce((prev: number, current: any) => prev + current[selector], 0)
}

const STATUS: any = {
  PENDING: {
    text: 'Pendente',
    color: Theme.colors.status.pending,
  },
  PAID: {
    text: 'Pago',
    color: Theme.colors.status.paid,
  },
  LATE: {
    text: 'Atrasado',
    color: Theme.colors.status.late,
  },
}

export const convertStatus = (status: string) => {
  return STATUS[status]
}

export const marginConfig = (array: any) => {
  if (!!array) {
    const marginType = `${array[0] ? `-${array[0]}` : array[0]}`
    return `margin${marginType}: ${array[1]}`
  }
  return 'margin: 0'
}

const padTo2Digits = (num: any) => {
  return num.toString().padStart(2, '0')
}

const formatDate = (date: any) => {
  return [date.getFullYear(), padTo2Digits(date.getMonth() + 1), padTo2Digits(date.getDate())].join('-')
}

export const orderByDueDay = (array: InvoiceType[]) => array.sort((a, b) => parseInt(a.dueDay) - parseInt(b.dueDay))

export const maxLengthText = (text: string, max: number) => (text.length > max ? `${text.slice(0, max)}...` : text)

export const validadeStatusByDueDay = (status: string, dueDay: string) => {
  if (status !== 'paid') {
    const currentDay = new Date().getDate()
    if (currentDay > parseInt(dueDay)) {
      return 'LATE'
    }
  }
  return status
}

export const filterInvoiceByDate = (array: InvoiceType[], selectedDate: Date) =>
  array.filter(
    invoice =>
      invoice.paymentType === 'inCash' && invoice.createdAt.slice(0, 7) === formatDate(selectedDate).slice(0, 7)
  )

export const filterByRecurring = (array: InvoiceType[]) => array.filter(invoice => invoice.paymentType === 'recurring')

export const filterByInstallments = (array: InvoiceType[], date: Date) => {
  const shortDate = new Date(formatDate(date).slice(0, 7))
  let filterByDate = array.filter(invoice => {
    if (invoice.paymentType !== 'installments') {
      return false
    }
    const startDate = new Date(invoice.installmentsDate.start.slice(0, 7))
    const endDate = new Date(invoice.installmentsDate.end.slice(0, 7))

    return shortDate >= startDate && shortDate <= endDate
  })
  const data = filterByDate.map(invoice => ({
    ...invoice,
    installments: { ...invoice.installments, current: (invoice.installments?.current || 0) + 1 },
  }))
  return data
}

export const filterByMonth = (array: InvoiceType[], date: Date) => {
  const data = [...filterInvoiceByDate(array, date), ...filterByRecurring(array), ...filterByInstallments(array, date)]
  return data
}
