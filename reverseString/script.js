const reversedString = str => {
    return str.split(' ').map(word =>  {
        return word.length >= 5 ? word.split('').reverse().join('') : word
    }).join(' ');;
}
const result = reversedString('Hey world JavaScript');
console.log(result);