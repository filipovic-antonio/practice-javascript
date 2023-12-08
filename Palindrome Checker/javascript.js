function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("hello"));   
  console.log(isPalindrome("A man, a plan, a canal, Panama")); 