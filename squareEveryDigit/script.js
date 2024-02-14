function squareDigits(num) {
    return Number(num
    .toString()
    .split('')
    .map(num => num * num)
    .join(''));
    }
  
  const result = squareDigits(534);
  const result1 = squareDigits(365645634);
  const result2= squareDigits(3213);
  console.log(result);
  console.log(result1);
  console.log(result2);