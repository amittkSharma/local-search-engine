import { getFirstCharUpperCase } from '../utils'

describe('Utils', () => {
  test('getFirstCharUpperCase', () => {
    const result = getFirstCharUpperCase('testString')

    expect(result).toBeDefined()
    expect(result).toBe('TestString')
  })
})
