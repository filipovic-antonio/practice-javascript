const calculateYears = (principal, interest, tax, desired) => {
  // your code
  var years = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    years++;
  }
  return years;
};
const result = calculateYears(1000, 0.05, 0.18, 1100);
console.log(result);
