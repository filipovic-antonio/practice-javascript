const middleElement = (arr) => {
  const sortedEl = arr.slice();
  sortedEl.sort((a, b) => a - b);
  const middleEl = sortedEl[1];
  const middleIndex = arr.indexOf(middleEl);
  return middleIndex;
};
const result = middleElement([2, 3, 1]);
console.log(result);
