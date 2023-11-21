function Arrays(array1,array2) {
    let largestNum = null;
    let comboArrays = [...array1, ...array2];

    for(let i = 0; i < comboArrays.length;i++) {
        if(comboArrays[i] > largestNum) {
            largestNum = comboArrays[i];
        }    
    }
    return largestNum;
}

console.log(Arrays([3,2,4,77], [43,23,23]));
console.log(Arrays([3,53,4,27], [32,23,23]));
console.log(Arrays([3,2,324,77], [44,23,73]));