let tableArr = [];
let number  = 5;
for(let i = 0; i < number; i++){
    let temp = [];
    for(let x = 0; x < number; x++){
        temp.push(i * x);
    }
    tableArr.push(temp);
}
console.table(tableArr);