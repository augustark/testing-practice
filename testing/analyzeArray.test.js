import analyzeArray from "../functions/analyzeArray";

test('average value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4)
})

test('min value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1)
})

test('max value', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8)
})

test('length of array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6)
})

test('object', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})