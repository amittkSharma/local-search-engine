const defaultJestConfig = require('../../jest.config.js')
const { name } = require('./package.json')

module.exports = {
  ...defaultJestConfig(name),
}
