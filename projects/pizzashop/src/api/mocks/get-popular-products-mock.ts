import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza calabresa', amount: 5 },
    { product: 'Pizza 4 queijos', amount: 10 },
    { product: 'Pizza bacon', amount: 15 },
    { product: 'Pizza de batata', amount: 8 },
  ])
})
