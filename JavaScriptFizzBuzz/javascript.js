function customFizzBuzz(arr, n) {
    return arr.map((num) => {
      let result = "";
  
      if (num % 3 === 0) {
        result += "Fizz";
      }
  
      if (num % 5 === 0) {
        result += "Buzz";
      }
  
      if (num % n === 0) {
        result += "Custom";
      }
  
      return result || num;
    });
  }
  
  // Example usage:
  const result = customFizzBuzz([1, 3, 5, 15, 13, 18, 20, 21], 7);
console.log(result);
