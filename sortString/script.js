const sortString = (array) => {
  return array.sort((a, b) => a.length - b.length);
};
const result = sortString(["Longer", "Short", "Longest"]);
console.log(result);
