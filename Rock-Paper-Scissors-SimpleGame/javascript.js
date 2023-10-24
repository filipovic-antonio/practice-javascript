const myArr = ['Rock' , 'Paper', 'Scissors'];

let player = Math.floor(Math.random() * 3);
let computer = Math.floor(Math.random() * 3);
let message =  "Player " + myArr[player] + ' vs computer ' + myArr[computer] + ' ';

if(computer === player) {
    message += 'Its a tie!';
} else if(computer > player) {
    if(computer === 0 || player ===2) {
        message += 'Computer win';
    } else { 
        message += 'Computer win!';
    }
} else {
    if(player === 0 || computer ===2) {
    message += 'player win';
    } else {
    message += 'player win!';
  }
}
console.log(message);