function printDecreasing(num) {
  // base case
  if (num === 0) return

  console.log(num)

  printDecreasing(num - 1)
}

printDecreasing(5)
