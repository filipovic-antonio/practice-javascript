const getDivisors = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  return count;
};
const result = getDivisors(30);
console.log(result);