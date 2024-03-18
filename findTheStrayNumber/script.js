const findStray = (arr) => {
  let uniqueNum = 0;
  for (let numbers of arr) {
    uniqueNum ^= numbers;
  }
  return uniqueNum;
};
const result = findStray([17, 17, 3, 17, 17, 17, 17]);
console.log(result);
