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
    {
      days: 'Tuesday-Friday',
      openingTime: [
        {
          start: '11:30',
          end: '15:00',
          type: 'open',
        },
        {
          start: '18:30',
          end: '00:00',
          type: 'open',
        },
      ],
    },
    {
      days: 'Saturday',
      openingTime: [
        {
          start: '18:00',
          end: '00:00',
          type: 'open',
        },
      ],
    },
    {
      days: 'Sunday',
      openingTime: [
        {
          start: '11:30',
          end: '15:00',
          type: 'open',
        },
      ],
    },
  ]

  return op
}
