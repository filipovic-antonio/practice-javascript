function sumNumbers(x, y) {
    x = parseFloat(prompt('Type the number!'));
    y = parseFloat(prompt('Type the number'));
    if(isNaN(x) && isNaN(y)) {
        console.log('Invalid input! Please type a number');
    }
    return x + y;
}

console.log(sumNumbers());