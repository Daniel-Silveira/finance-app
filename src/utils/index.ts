export const padStart = (text: any) => {
  return String(text).padStart(2, '0')
}

export const formatPrice = (number: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number)
}

export const calculateValueByArray = (array: any, selector: string) => {
  return array.reduce((prev: number, current: any) => prev + current[selector], 0)
}

const STATUS: any = {
  PENDING: {
    text: 'Pendente',
    color: '#FFD93D',
  },
  PAID: {
    text: 'Pago',
    color: '#00FFAB',
  },
  LATE: {
    text: 'Atrasado',
    color: '#FD5D5D',
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
