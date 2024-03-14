const minMax = array => {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return `The minimum and maximum number from this array are : ${[min, max].join(' ')}`;
}
let result = minMax([1,4,543,223,43]);
console.log(result);