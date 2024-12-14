function powerLinear(num, pow) {
  if (pow === 0) {
    return 1
  }

  return num * powerLinear(num, pow - 1)
}

console.log(powerLinear(2, 5))
