const maskify = cc => {
    return cc.split('').map((char, i, arr) => i < arr.length - 4 ? '#' : char).join('');
}
const result = maskify('8541263753465123'); //############5123
console.log(result);