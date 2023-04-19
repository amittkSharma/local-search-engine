import { ApiAddress, ContactType } from '../models'
import { getContactDetails } from '../services'

describe('Service: getContactDetails', () => {
  test('getContactDetailsWithOnlySinglePhoneNumber', () => {
    const inputAddress: ApiAddress[] = [
      {
        contacts: [
          {
            contact_type: ContactType.PHONE,
            formatted_service_code: '27 321 11 81',
            service_code: '0273211181',
          },
        ],
      },
    ]
    const result = getContactDetails(inputAddress)

    expect(result).toBeDefined()
    expect(result).toEqual({ phones: ['0273211181'], websiteUrls: [] })
  })

  test('getContactDetailsWithMultiplePhoneNumbers', () => {
    const inputAddress: ApiAddress[] = [
      {
        contacts: [
          {
            contact_type: ContactType.PHONE,
            formatted_service_code: '27 321 11 81',
            service_code: '0273211181',
          },
          {
            contact_type: ContactType.PHONE,
            formatted_service_code: '27 321 11 82',
            service_code: '0273211182',
          },
        ],
      },
    ]
    const result = getContactDetails(inputAddress)

    expect(result).toBeDefined()
    expect(result).toEqual({ phones: ['0273211181', '0273211182'], websiteUrls: [] })
  })

  test('getContactDetailsWithMultiplePhoneNumbersAndUrl', () => {
    const inputAddress: ApiAddress[] = [
      {
        contacts: [
          {
            contact_type: ContactType.PHONE,
            formatted_service_code: '27 321 11 81',
            service_code: '0273211181',
          },
          {
            contact_type: ContactType.PHONE,
            formatted_service_code: '27 321 11 82',
            service_code: '0273211182',
          },
          {
            contact_type: ContactType.URL,
            formatted_service_code: 'http://cafemarche.ch',
            service_code: 'http://cafemarche.ch',
          },
        ],
      },
    ]
    const result = getContactDetails(inputAddress)

    expect(result).toBeDefined()
    expect(result).toEqual({
      phones: ['0273211181', '0273211182'],
      websiteUrls: ['http://cafemarche.ch'],
    })
  })
})
