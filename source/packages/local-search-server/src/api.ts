import { Request, Response, Router } from 'express'

export const api: Router = Router()

api.get('/version', version)

async function version(_req: Request, res: Response<object>) {
  res.status(200).send({ version: '1.0.0-rc.10' })
}
