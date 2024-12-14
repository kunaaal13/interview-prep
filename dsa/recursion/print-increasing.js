function printIncreasing(num) {
  if (num === 0) return

  printIncreasing(num - 1)
  console.log(num)
}

printIncreasing(5)
