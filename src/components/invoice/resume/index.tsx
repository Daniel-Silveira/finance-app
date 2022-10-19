import { VictoryPie } from 'victory-native'
import { FontAwesome } from '@expo/vector-icons'
import { DefaultText } from '../../shared/defaultText'
import * as S from './styled'
import { calculateValueByArray, formatPrice } from '../../../utils'
import { Theme } from '../../../theme'

const Icon: any = FontAwesome
const Chart: any = VictoryPie

export const Resume = (props: any) => {
  if (!props?.data?.length) return null
  const filterByStatus = (status: string) => props?.data.filter((f: any) => f.status === status)
  const totalPayable = calculateValueByArray(props.data, 'value')
  const finalBalance = props.user.balance - totalPayable
  const latePayment = calculateValueByArray(filterByStatus('LATE'), 'value') || 0
  const pendingPayment = calculateValueByArray(filterByStatus('PENDING'), 'value') || 0
  const paidPayment = calculateValueByArray(filterByStatus('PAID'), 'value') || 0

  const typesChart: any = {
    finalBalance: {
      text: 'Saldo final',
      color: '#00FFAB',
    },
    totalPayable: {
      text: 'Total gasto',
      color: '#fff',
    },
    latePayment: {
      text: 'Atrasado',
      color: Theme.colors.status.late,
    },
    pendingPayment: {
      text: 'Pendente',
      color: Theme.colors.status.pending,
    },
    paidPayment: {
      text: 'Pago',
      color: Theme.colors.status.paid,
    },
  }

  const dataChart = [
    { y: paidPayment, id: 'paidPayment' },
    { y: pendingPayment, id: 'pendingPayment' },
    { y: latePayment, id: 'latePayment' },
    { y: totalPayable, id: 'totalPayable' },
    { y: finalBalance, id: 'finalBalance' },
  ]

  const dataChartWithoutTotal = dataChart.filter(i => i.id !== 'totalPayable')

  return (
    <S.Container>
      <S.Header>
        <DefaultText size="16px" type="bold">
          Resumo mensal
        </DefaultText>
        <DefaultText size="14px" type="medium">
          Saldo inicial: {formatPrice(props.user.balance)}
        </DefaultText>
      </S.Header>
      <S.Content>
        <S.WrapperChart>
          <Chart
            data={dataChartWithoutTotal}
            width={230}
            height={230}
            innerRadius={40}
            colorScale={dataChartWithoutTotal.map(d => typesChart[d.id].color)}
            animate={{
              duration: 1000,
            }}
          />
        </S.WrapperChart>
        <S.WrapperDetails>
          {dataChart.map(
            item =>
              !!item.y && (
                <S.Detail key={item.id}>
                  <Icon name="circle" size={16} color={typesChart[item.id].color} />
                  <DefaultText size="16px" margin={['left', '3%']}>
                    {typesChart[item.id].text}:{' '}
                    <DefaultText size="16px" type="bold">
                      {formatPrice(item.y)}
                    </DefaultText>
                  </DefaultText>
                </S.Detail>
              )
          )}
        </S.WrapperDetails>
      </S.Content>
    </S.Container>
  )
}
