const filterList = l => {
    return l.filter(v => Number.isInteger(v)).join(',');
}

const result = filterList([1,2,'abc',775,'house']);
console.log('Filtered number from arrays are: ' + result);