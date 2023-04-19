import { Request, Response, Router } from 'express'
import * as https from 'https'
import { config } from './config'
import { ApiSearchResponse, SearchResponse } from './models'
import { getContactDetails, getOpeningTimes } from './services'
import { log } from './utils'

export const api: Router = Router()

api.get('/searchResults', searchResults)
api.get('/details', details)

function searchResults(req: Request, res: Response<object>) {
  const { searchText } = req.query
  if (searchText === undefined || searchText === '') {
    res.status(200).json({ response: [] })
  } else {
    const data = [
      {
        id: 'GXvPAor1ifNfpF0U5PTG0w',
        name: 'Casa Ferlin',
        location: 'Stampfenbachstrasse 38, 8006 Zürich',
      },
      {
        id: 'ohGSnJtMIC5nPfYRi_HTAg',
        name: 'Le Café du Marché',
        location: 'Rue de Conthey 17, 1950 Sion',
      },
      {
        id: 'GXvPAor1ifNfpF0U5PTG0w',
        name: 'Casa Ferlin',
        location: 'Stampfenbachstrasse 38, 8006 Zürich',
      },
      {
        id: 'ohGSnJtMIC5nPfYRi_HTAg',
        name: 'Le Café du Marché',
        location: 'Rue de Conthey 17, 1950 Sion',
      },
    ]

    const lowercaseSearchTxt = searchText.toString().toLowerCase()
    const filteredData = data.filter(
      d =>
        d.name.toLowerCase().includes(lowercaseSearchTxt) ||
        d.location.toLowerCase().includes(lowercaseSearchTxt),
    )
    res.status(200).json({ response: filteredData })
  }
}

async function details(req: Request, res: Response<object>) {
  const { searchId } = req.query
  log.info(`Search id is: ${searchId}`)
  const options = {
    method: 'GET',
  }

  const dataChunks: unknown[] = []
  const request = https.request(`${config.server.externalApi}${searchId}`, options, httpsRes => {
    httpsRes.setEncoding('utf8')
    httpsRes.on('data', dataChunk => {
      dataChunks.push(dataChunk)
    })
    httpsRes.on('end', () => {
      const data = dataChunks.join('')
      const jsonData = JSON.parse(data) as ApiSearchResponse

      const p: SearchResponse = {
        name: jsonData.displayed_what ?? 'No Name Found',
        location: jsonData.displayed_where ?? 'No Name Found',
        contactDetails: jsonData.addresses ? getContactDetails(jsonData.addresses) : undefined,
        openingHours: jsonData.opening_hours ? getOpeningTimes(jsonData.opening_hours) : undefined,
      }

      res.status(200).json({ response: p })
    })
  })

  request.on('error', error => {
    res.status(500).json({ response: error })
  })

  request.end()
}
