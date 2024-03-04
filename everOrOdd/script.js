const everOrOdd = arr => {
    const evOrOdd = arr.reduce((total, sum) => total + sum,0);
    if(evOrOdd % 2 === 0) {
        return 'even';
    } else if(evOrOdd ) {
        return 'odd'
    }
}
const result = everOrOdd([0,1,2]);
console.log(result);