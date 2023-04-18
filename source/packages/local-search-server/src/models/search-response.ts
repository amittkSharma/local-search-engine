export interface OpeningTime {
  start?: string
  end?: string
  type: string
}

export interface OpeningHour {
  days: string
  openingTime: OpeningTime[]
}

export interface ContactDetails {
  phones: string[]
  websiteUrls: string[]
}

export interface SearchResponse {
  name: string
  location: string
  contactDetails?: ContactDetails
  openingHours?: OpeningHour[]
}
