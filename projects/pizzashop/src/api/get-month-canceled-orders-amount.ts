import { api } from '@/lib/axios'

export interface getMonthCanceledOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}
export async function getMonthCanceledOrdersAmount() {
  const responde = await api.get<getMonthCanceledOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return responde.data
}
