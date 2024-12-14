function firstIndexOfOccurence(array, num, index) {
  if (index === array.length - 1) return index

  const firstIndex = firstIndexOfOccurence(array, num, index + 1)

  if (array[index] === num) return index

  return firstIndex
}

console.log(firstIndexOfOccurence([23, 11, 3, 5, 4, 3], 3, 0))
