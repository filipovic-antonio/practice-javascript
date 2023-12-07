const obj = { a: 10, b: 20, c: 30 };
const sum = Object.values(obj).reduce((sum, value) => sum + value, 0) 

console.log(sum)