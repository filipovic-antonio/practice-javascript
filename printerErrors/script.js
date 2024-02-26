const printerErrors = s => {
    const errorCount = s.split('').filter(char => char > 'm').length;
    const errorRate = `${errorCount}/${s.length}`;
    return errorRate;
}
const result = printerErrors('aaaxbbbbyyhwawiwjjjwwm');
console.log(result); // OUTPUT: 8/22