import { ApiOpeningHours, OpeningHour } from '../models'
import { log } from '../utils'

export function getOpeningTimes(apiOpeningHours: ApiOpeningHours): OpeningHour[] {
  const { days } = apiOpeningHours
  const allDays = Object.entries(days)
  log.info(JSON.stringify(allDays, null, 2))

  const op: OpeningHour[] = [
    {
      days: 'Monday',
      openingTime: [
        {
          type: 'closed',
        },
      ],
    },
  ]

  return op
}
