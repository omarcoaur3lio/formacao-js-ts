import { api } from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromYesterday: number
}
export async function getDayOrdersAmount() {
  const responde = await api.get<GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return responde.data
}
