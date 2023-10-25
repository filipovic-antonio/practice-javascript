let max = 5;
let randomNumber =  Math.floor(Math.random() * 3 + 1);
//console.log(randomNumber);
let correct =  false;
while(!correct) {
    let guess = prompt("Guess the number: " + max);
    guess = Number(guess);
    if(guess === randomNumber) {
        correct = true;
        console.log('You have correct number: ' + randomNumber);
    } else if (guess > randomNumber) {
        console.log('To high!');
    } else {
        console.log('To low!');
    }
}