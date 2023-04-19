import * as _ from 'lodash'
import { ApiOpeningHours, OpeningHour, OpeningTime } from '../models'
import { getFirstCharUpperCase } from '../utils'

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export function getOpeningTimes(apiOpeningHours: ApiOpeningHours): OpeningHour[] {
  const { days } = apiOpeningHours
  const openWeekdays = Object.keys(days)
  const closedWeekDays = _.differenceBy(weekdays, openWeekdays, 0)

  closedWeekDays.forEach(closedWeekDay => {
    days[closedWeekDay] = [{ type: 'closed' }]
  })

  const newDaysObj = {}
  weekdays.forEach(weekday => {
    newDaysObj[weekday] = days[weekday]
  })
  const allUniqueTimes = _.uniqWith(Object.values(newDaysObj), _.isEqual)

  const openingHours = allUniqueTimes.map(entry => {
    const openDays = weekdays.filter(d => JSON.stringify(newDaysObj[d]) === JSON.stringify(entry))

    const openingHr: OpeningHour = {
      days:
        openDays.length > 1
          ? `${getFirstCharUpperCase(openDays[0])}-${getFirstCharUpperCase(
              openDays[openDays.length - 1],
            )}`
          : getFirstCharUpperCase(openDays[0]),
      openingTime: [...(entry as never)] as OpeningTime[],
    }

    return openingHr
  })

  return openingHours
}
