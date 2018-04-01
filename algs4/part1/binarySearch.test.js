const binarySearch = require('./binarySearch')

let array = [3, 5, 6, 8, 9, 43, 23, 24, 46, 45, 47, 56, 78]

let arraySort = array.sort((a, b) => a - b)

test('should binarySearch is corrent', () => {
  expect(binarySearch(arraySort, 9)).toBe(4)
})

test('should key is not in array', () => {
  expect(binarySearch(arraySort, 1)).toBe(-1)
})
