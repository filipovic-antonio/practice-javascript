function lowerNumber(array1, array2) {
    let comboArrays = [...array1, ...array2];

    let lowNumber = comboArrays[0];

     for(let i = 0; i < comboArrays.length;i++) {
        if(comboArrays[i] < lowNumber) {
            lowNumber = comboArrays[i];
        }
     }
     return lowNumber;
}
console.log(lowerNumber([22,32,32], [23,8,7]));