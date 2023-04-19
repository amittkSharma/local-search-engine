import { ApiOpeningHours } from '../models'
import { getOpeningTimes } from '../services'

describe('Service: getOpeningTimes', () => {
  test('getOpeningTimes', () => {
    const inputOpeningHrs: ApiOpeningHours = {
      days: {
        tuesday: [
          {
            start: '11:30',
            end: '15:00',
            type: 'OPEN',
          },
          {
            start: '18:30',
            end: '00:00',
            type: 'OPEN',
          },
        ],
        wednesday: [
          {
            start: '11:30',
            end: '15:00',
            type: 'OPEN',
          },
          {
            start: '18:30',
            end: '00:00',
            type: 'OPEN',
          },
        ],
        thursday: [
          {
            start: '11:30',
            end: '15:00',
            type: 'OPEN',
          },
          {
            start: '18:30',
            end: '00:00',
            type: 'OPEN',
          },
        ],
        friday: [
          {
            start: '11:30',
            end: '15:00',
            type: 'OPEN',
          },
          {
            start: '18:30',
            end: '00:00',
            type: 'OPEN',
          },
        ],
        saturday: [
          {
            start: '18:00',
            end: '00:00',
            type: 'OPEN',
          },
        ],
        sunday: [
          {
            start: '11:30',
            end: '15:00',
            type: 'OPEN',
          },
        ],
      },
    }
    const result = getOpeningTimes(inputOpeningHrs)

    expect(result).toBeDefined()
    expect(result).toEqual([
      { days: 'Monday', openingTime: [{ type: 'closed' }] },
      {
        days: 'Tuesday-Friday',
        openingTime: [
          { start: '11:30', end: '15:00', type: 'OPEN' },
          { start: '18:30', end: '00:00', type: 'OPEN' },
        ],
      },
      { days: 'Saturday', openingTime: [{ start: '18:00', end: '00:00', type: 'OPEN' }] },
      { days: 'Sunday', openingTime: [{ start: '11:30', end: '15:00', type: 'OPEN' }] },
    ])
  })
})
