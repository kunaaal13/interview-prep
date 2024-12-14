function printArray(arr, index) {
  if (index > arr.length - 1) return

  console.log(arr[index])
  printArray(arr, index + 1)
}

printArray([1, 2, 3, 4, 5], 0)
