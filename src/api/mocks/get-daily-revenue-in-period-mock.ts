import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/05/2024', receipt: 2000 },
    { date: '02/05/2024', receipt: 840 },
    { date: '03/05/2024', receipt: 3400 },
    { date: '04/05/2024', receipt: 960 },
    { date: '05/05/2024', receipt: 2000 },
    { date: '06/05/2024', receipt: 1140 },
    { date: '07/05/2024', receipt: 1620 },
  ])
})
