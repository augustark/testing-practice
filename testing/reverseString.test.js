import reverseString from '../functions/reverseString'

test('string reverse gnirts', () => {
  expect(reverseString('wOodChUcK')).toBe('KcUhCdoOw')
})

test('reverse string', () => {
  expect(reverseString('ordinary')).toBe('yranidro')
})