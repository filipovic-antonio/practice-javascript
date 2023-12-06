const array = [103, 20, 3300, 4];

const updatedArray = array.map(num =>
({value: num, digitsCount:`${num}`.length}));

console.log(updatedArray); 
