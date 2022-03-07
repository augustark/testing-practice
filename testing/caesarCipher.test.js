import caesarCipher from "../functions/caesarCipher";

test('decipher', () => {
  expect(caesarCipher('protect the civilians', 13)).toBe('cebgrpg gur pvivyvnaf')
})

test('preserve case', () => {
  expect(caesarCipher('ProTect The CiVilianS', 5)).toBe('UwtYjhy Ymj HnAnqnfsX')
})

test('non-alpha', () => {
  expect(caesarCipher('Hello, World! from user091', 14)).toBe('Vszzc, Kcfzr! tfca igsf091')
})