function maxArray(array, index) {
  if (index === array.length - 1) return array[array.length - 1]

  return Math.max(array[index], maxArray(array, index + 1))
}

console.log(maxArray([1, 24, 23, 11, 5], 0))
