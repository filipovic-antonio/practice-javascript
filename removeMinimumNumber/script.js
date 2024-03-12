const findMinNum = arr => {
    if(arr.length < 0) {
    return arr;
    }
    const smallIndex = arr.indexOf(Math.min(...arr));
    const newArr = arr.filter((el, i) => i !== smallIndex);
  
    return newArr;
}
const result = findMinNum([1,2,3,4,5]);
console.log(result);