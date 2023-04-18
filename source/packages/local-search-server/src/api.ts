import { Request, Response, Router } from 'express'
import * as https from 'https'
import { ApiSearchResponse, SearchResponse } from './models'
import { getContactDetails, getOpeningTimes } from './services'
import { log } from './utils'

export const api: Router = Router()

api.get('/version', version)
api.get('/details', details)

async function version(_req: Request, res: Response<object>) {
  res.status(200).send({ version: '1.0.0-rc.10' })
}

async function details(req: Request, res: Response<object>) {
  const { searchId } = req.query
  log.info(`Search id is: ${searchId}`)
  const options = {
    method: 'GET',
  }

  const dataChunks: unknown[] = []
  const request = https.request(
    `https://storage.googleapis.com/coding-session-rest-api/${searchId}`,
    options,
    httpsRes => {
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
          openingHours: jsonData.opening_hours
            ? getOpeningTimes(jsonData.opening_hours)
            : undefined,
        }

        res.status(200).json({ response: p })
      })
    },
  )

  request.on('error', error => {
    res.status(500).json({ response: error })
  })

  request.end()
}
