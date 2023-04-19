import * as _ from 'lodash'
import { ApiOpeningHours, OpeningHour, OpeningTime } from '../models'
import { getFirstCharUpperCase } from '../utils'

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export function getOpeningTimes(apiOpeningHours: ApiOpeningHours): OpeningHour[] {
  const { days } = apiOpeningHours
  const openWeekdays = Object.keys(days)
  const allTimes = _.uniqWith(Object.values(days), _.isEqual)
  const closedWeekDays = _.differenceBy(weekdays, openWeekdays, 0)

  const openingHours = allTimes.map(entry => {
    const openDays = openWeekdays.filter(d => JSON.stringify(days[d]) === JSON.stringify(entry))

    const openingHr: OpeningHour = {
      days:
        openDays.length > 1
          ? `${getFirstCharUpperCase(openDays[0])}-${getFirstCharUpperCase(
              openDays[openDays.length - 1],
            )}`
          : getFirstCharUpperCase(openDays.toString()),
      openingTime: [...entry] as OpeningTime[],
    }

    return openingHr
  })

  closedWeekDays.forEach(closedWeekDay => {
    const openingHr: OpeningHour = {
      days: getFirstCharUpperCase(closedWeekDay.toString()),
      openingTime: [{ type: 'closed' }] as OpeningTime[],
    }
    openingHours.push(openingHr)
  })

  return openingHours
}
