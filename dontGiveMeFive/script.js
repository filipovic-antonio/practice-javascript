function dontGiveMeFive(start, end) {
    let count = 0;
    for(let number = start; number <= end; number++) {
        if(!String(number).includes('5')) {
            count++;
        }
    }
    return count;
}
  const result = dontGiveMeFive(1,9);
  console.log(result);