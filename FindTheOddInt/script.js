function findOddOccurrence(arr) {
    const occurrencesMap = new Map();

    for (const number of arr) {
        if (occurrencesMap.has(number)) {
            occurrencesMap.set(number, occurrencesMap.get(number) + 1);
        } else {
            occurrencesMap.set(number, 1);
        }
    }

    for (const [key, value] of occurrencesMap.entries()) {
        if (value % 2 !== 0) {
            return key;
        }
    }
}
const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];
const result = findOddOccurrence(arr);
console.log(result); 
