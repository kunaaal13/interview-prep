function powerLogarithmic(num, pow) {
  if (pow === 0) return 1

  const isEven = pow % 2 === 0

  const newPow = Math.floor(pow / 2)

  return isEven
    ? powerLogarithmic(num, newPow) * powerLogarithmic(num, newPow)
    : powerLogarithmic(num, newPow) * powerLogarithmic(num, newPow) * num
}

console.log(powerLogarithmic(2, 5))
