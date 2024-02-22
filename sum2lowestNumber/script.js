const sumTwoLowestNumber = numbers => {
    const sortedNumbers = numbers.sort((a,b) =>a-b);
    const [first, second] = sortedNumbers.slice(0,2);
    return first + second;
}
const result = sumTwoLowestNumber([34,11,511,23,21,23]);
console.log(result);