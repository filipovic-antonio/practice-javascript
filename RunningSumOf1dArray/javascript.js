let runningSum = function(nums) {
    let sum = 0;
    let runningSum = [];
    for(let i = 0; i < nums.length;i++) {
        sum += nums[i];
        runningSum.push(sum);
    }
    return runningSum;
}

console.log(runningSum([1,1,1,1,1]))