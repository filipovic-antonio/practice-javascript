function counter(start) {
    let count = start;
    return function () {
        return count++;
    }
}

 
 const counte = counter(10)
console.log(counte());
console.log(counte());
console.log(counte());
