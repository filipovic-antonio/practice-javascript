const findTheDivisors = n => {
    if(n <= 1)  {
        return 'Invalid input n should be greater then 0';
    }
    divisorsArr = [];
    for(let i = 2; i <= n-1;i++) {
        if(n % i === 0) {
            divisorsArr.push(i)
        }
    }
    if(divisorsArr.length === 0) {
        return `${n} is prime`
    } else {
        return divisorsArr;
    }
}
const result = findTheDivisors(12);
console.log(result);