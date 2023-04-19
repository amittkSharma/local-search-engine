export enum ContactType {
  PHONE = 'phone',
  URL = 'url',
}

export interface ApiContact {
  contact_type: ContactType
  formatted_service_code: string
  service_code: string
}

export interface ApiAddress {
  contacts: ApiContact[]
}

export interface ApiDays {
  start?: string
  end?: string
  type: string
}

export interface ApiOpeningHours {
  days: { [key: string]: ApiDays[] }
}

export interface ApiSearchResponse {
  addresses: ApiAddress[]
  displayed_what: string
  displayed_where: string
  opening_hours: ApiOpeningHours
}
