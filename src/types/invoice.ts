export interface InvoiceType {
  _id: string;
  type: string;
  title: string;
  value: number;
  installments?: {
    current: number;
    total: number;
  };
  status: string;
  dueDate: string;
}
