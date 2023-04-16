import * as http from 'http'
import { app } from './app'
import { config, getConfigurationFileName } from './config'
import { log } from './utils'

const server = http.createServer(app)
const configFileName = getConfigurationFileName()
if (configFileName) {
  log.info(`Starting server using configuration file ${configFileName}`)

  server.listen(config.server.port, () => {
    log.info(`Starting server at port: ${config.server.port}`)
  })
} else {
  log.error(`Not able to start the server as configuration is not found. `)
}
