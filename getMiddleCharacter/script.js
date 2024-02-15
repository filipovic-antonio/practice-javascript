const getMiddleChar = s => {
    const middleChar = Math.ceil(s.length / 2 - 1);
    return s.substr(middleChar, s.length % 2 === 0 ? 2 : 1);
}
const result = getMiddleChar('middle');//dd
const result1 = getMiddleChar('testing'); //t
console.log(result);
console.log(result1);


