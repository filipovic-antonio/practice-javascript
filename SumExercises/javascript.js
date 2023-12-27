let runningSum = function(nums) {
    let runningSum = [];
    let sum = 0;
    for(let i=0;i<nums.length;i++) {
        sum += nums[i];
        runningSum.push(sum);
    }
    return runningSum;
}
let result = runningSum([1,2,3,4]);
console.log(result);