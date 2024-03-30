const twoOldestAges = (ages) => {
  ages.sort((a, b) => b - a);
  const oldestAges = [ages[0], ages[1]];
  return oldestAges;
};
const result = twoOldestAges([1, 4, 3, 24, 6, 66, 222, 5, 555]);
console.log(result);
