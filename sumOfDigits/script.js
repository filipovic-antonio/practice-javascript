function sumDigitsToOne(n) {
  function sumOfDigits(num) {
    return num
      .toString()
      .split("")
      .reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  while (n >= 10) {
    n = sumOfDigits(n);
  }
  return n;
}
console.log(sumDigitsToOne(16));
console.log(sumDigitsToOne(13));
console.log(sumDigitsToOne(789));
