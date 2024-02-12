//With for loop
/*const squareNumber = numbers => {
    let sum = 0;
    for(let i = 0; i < numbers.length;i++) {
        sum += numbers[i] * numbers [i];
    }
    return sum;

}
const result = squareNumber([5,5]);
console.log(result);*/

//With reduce() method

function squareSum(numbers) {
    return numbers.reduce((sum, n) => {
    return (n*n) + sum;
    }, 0)
}
const result = squareSum([5,5]);
console.log(result);


