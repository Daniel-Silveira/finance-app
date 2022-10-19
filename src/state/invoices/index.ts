import { createGetReState, createReState, createReStateDispatch, createReStateSelect } from '@raulpesilva/re-state'
import { InvoiceType } from '../../types/Invoice'

export const Invoices = 'invoices'
export const invoicesInitialValue: InvoiceType[] = []
export const DateSelect = 'dateSelect'
export const dateSelectInitialValue: Date = new Date()

export const useDateSelectState = createReState<Date>(DateSelect, dateSelectInitialValue)

export const useInvoicesState = createReState<InvoiceType[]>(Invoices, invoicesInitialValue)
export const useInvoicesSelect = createReStateSelect<InvoiceType[]>(Invoices)
export const dispatchInvoices = createReStateDispatch<InvoiceType[]>(Invoices)
export const getInvoices = createGetReState<InvoiceType>(Invoices)
export const resetInvoices = () => dispatchInvoices(invoicesInitialValue)
