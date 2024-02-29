const isTriangle= (a,b,c) => {
    if(a <= 0 || b <= 0 || c <=0) false;
    if(a + b > c && b + c > a && a + c > b) {
        return true;
    } else {
        return false;
    }
}
const result = isTriangle(1,2,2);
const result1 = isTriangle(6,2,2);
console.log(result);
console.log(result1);