import {calculator} from '../functions/calculator'

test('add 6 + 54', () => {
  expect(calculator.add(6, 54)).toBe(60)
})

test('subtract 9 - 53', () => {
  expect(calculator.subtract(9, 53)).toBe(-44)
})

test('multiply 2 * 14', () => {
  expect(calculator.multiply(2, 14)).toBe(28)
})

test('divide 25 / 0', () => {
  expect(calculator.divide(25, 0)).toBe(null)
})