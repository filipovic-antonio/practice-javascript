const sortedArray = (arr) => {
  if (arr === null || arr.length === 0) return [];
  return arr.sort((a, b) => a - b).join(" ");
};
const result = sortedArray([2, 54, 1, 23, 3, 10]);
console.log(result);
