import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '48 999999999',
    },
    status: 'pending',
    totalInCents: 6000,
    orderId: params.orderId,
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza bacon' },
        quantity: 2,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza batata' },
        quantity: 2,
      },
    ],
  })
})
