import { ApiAddress, ContactDetails, ContactType } from '../models'

export function getContactDetails(addresses: ApiAddress[]): ContactDetails {
  const contactDetails: ContactDetails = {
    phones: [],
    websiteUrls: [],
  }

  addresses.forEach(address => {
    const { contacts } = address

    contacts.forEach(contact => {
      switch (contact.contact_type.toLowerCase()) {
        case ContactType.PHONE:
        default:
          contactDetails.phones.push(contact.service_code)
          break
        case ContactType.URL:
          contactDetails.websiteUrls.push(contact.service_code)
          break
      }
    })
  })
  return contactDetails
}
