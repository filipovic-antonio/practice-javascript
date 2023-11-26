const data = [17, 21, 23];

const printForecast = (array) => {
    let str = '';
    for(let i = 0; i < array.length; i++) {
    str += `... ${array[i]}°C in ${i + 1} days`;
    }
    return str;
}
 console.log(printForecast(data));
