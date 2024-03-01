function rowSumOddNumbers(n) {
    const startNumber = Math.pow(n, 2) - n + 1;

    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += startNumber + 2 * i;
    }
    return sum;
}

let nthRow = 3;
let rowSum = rowSumOddNumbers(nthRow);
console.log(`The sum of the odd numbers in the ${nthRow}th row is: ${rowSum}`);
