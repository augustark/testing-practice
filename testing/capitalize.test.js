import capitalize from '../functions/capitalize'

test('capitalize first letter', () => {
  expect(capitalize('aMmUniTiON')).toBe('Ammunition')
})