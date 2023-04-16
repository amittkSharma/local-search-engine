import nodeConfig = require('config')
import * as path from 'path'

export const config = {
  server: {
    ...nodeConfig.get('server'),
  },
}

export function getConfigurationFileName(): string | undefined {
  const configSources = nodeConfig.util.getConfigSources()
  if (configSources.length !== 0) {
    return path.basename(configSources[0].name)
  } else {
    return undefined
  }
}
